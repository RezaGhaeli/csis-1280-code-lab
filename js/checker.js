/*
   Trailhead Code Lab: renders code and grades it.
   The student's page is rendered twice in hidden frames (960px "desktop" and 400px "phone"),
   then each check runs against the real DOM, computed styles, and CSS rules.
*/
const Checker = (() => {

  /* Put the CSS into the page the way <link href="style.css"> would. */
  function compose(html, css) {
    const style = '<style id="lab-css">\n' + css + '\n</style>';
    let doc = html.replace(/<link[^>]*href=["']?style\.css["']?[^>]*>/i, '');
    if (/<\/head>/i.test(doc)) return doc.replace(/<\/head>/i, style + '\n</head>');
    return style + '\n' + doc;
  }

  function frame(width) {
    const f = document.createElement('iframe');
    f.setAttribute('aria-hidden', 'true');
    f.tabIndex = -1;
    f.style.cssText = 'position:absolute;left:-12000px;top:0;height:900px;border:0;visibility:hidden;width:' + width + 'px';
    document.body.appendChild(f);
    return f;
  }

  function load(f, src) {
    return new Promise(res => {
      let done = false;
      const finish = () => { if (!done) { done = true; setTimeout(res, 60); } };
      f.onload = finish;
      f.srcdoc = src;
      setTimeout(finish, 2500);
    });
  }

  /* Flatten every style rule, including those inside @media. */
  function flatRules(doc) {
    const out = [], media = [];
    const sheet = doc.getElementById('lab-css');
    if (!sheet || !sheet.sheet) return { out, media };
    (function walk(list, inMedia) {
      for (const r of list) {
        if (r.type === 1) out.push(Object.assign(r, { inMedia }));
        else if (r.type === 4) { media.push(r); walk(r.cssRules, true); }
      }
    })(sheet.sheet.cssRules, false);
    return { out, media };
  }

  function makeContext(wide, narrow, src) {
    const doc = wide.contentDocument, win = wide.contentWindow;
    const ndoc = narrow.contentDocument, nwin = narrow.contentWindow;
    const { out: rules, media } = flatRules(doc);
    const c = {
      doc, win, src,
      q: s => { try { return doc.querySelector(s); } catch (e) { return null; } },
      qa: s => { try { return [...doc.querySelectorAll(s)]; } catch (e) { return []; } },
      has: s => !!c.q(s),
      text: s => { const e = c.q(s); return e ? e.textContent.trim().replace(/\s+/g, ' ') : ''; },
      attr: (s, n) => { const e = c.q(s); return e ? e.getAttribute(n) : null; },
      cs: (s, p) => { const e = c.q(s); return e ? win.getComputedStyle(e).getPropertyValue(p).trim() : '(element not found)'; },
      csN: (s, p) => { let e = null; try { e = ndoc.querySelector(s); } catch (x) {} return e ? nwin.getComputedStyle(e).getPropertyValue(p).trim() : '(element not found)'; },
      rect: s => { const e = c.q(s); return e ? e.getBoundingClientRect() : { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 }; },
      px: v => parseFloat(v) || 0,
      rules: () => rules,
      media: () => media,
      ok: (ok, found) => ({ ok: !!ok, found })
    };
    return c;
  }

  /* Tags that must be closed explicitly; a mismatch usually means a missing end tag. */
  const PAIRED = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer', 'div', 'ul', 'ol', 'form', 'fieldset',
                  'select', 'textarea', 'video', 'audio', 'blockquote', 'a', 'h1', 'h2', 'h3', 'button', 'label', 'p', 'li'];
  function lintHtml(html) {
    const clean = html.replace(/<!--[\s\S]*?-->/g, '');
    const notes = [];
    for (const t of PAIRED) {
      const open = (clean.match(new RegExp('<' + t + '(\\s[^>]*)?>', 'gi')) || []).length;
      const close = (clean.match(new RegExp('</' + t + '\\s*>', 'gi')) || []).length;
      if (open > close && !(t === 'li' || t === 'p')) notes.push('`<' + t + '>` is opened ' + open + '× but closed ' + close + '×: check for a missing `</' + t + '>`.');
      else if (close > open) notes.push('`</' + t + '>` appears ' + close + '× but `<' + t + '>` only ' + open + '×: check for an extra closing tag.');
    }
    if (/<img(?![^>]*\balt=)[^>]*>/i.test(clean)) notes.push('An `<img>` has no `alt` attribute.');
    return notes;
  }
  function lintCss(css) {
    const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
    const notes = [];
    const o = (clean.match(/{/g) || []).length, cl = (clean.match(/}/g) || []).length;
    if (o !== cl) notes.push('Your CSS has ' + o + ' `{` but ' + cl + ' `}`: a rule is not closed, so the rules after it may be ignored.');
    // inside each rule body, a declaration line followed by another declaration needs a semicolon
    for (const body of clean.match(/{[^{}]*}/g) || []) {
      const lines = body.slice(1, -1).split('\n').map(l => l.trim()).filter(Boolean);
      for (let i = 0; i < lines.length - 1; i++) {
        if (/^[a-z-]+\s*:/i.test(lines[i]) && !/;$/.test(lines[i]) && /^[a-z-]+\s*:/i.test(lines[i + 1])) {
          notes.push('A semicolon is missing after `' + lines[i] + '`, so the next declaration is ignored too.');
        }
      }
    }
    if (/:\s*#[0-9a-f]{1,2}(?![0-9a-f])/i.test(clean) || /:\s*#[0-9a-f]{4,5}(?![0-9a-f])/i.test(clean)) notes.push('A colour like `#3B26` has the wrong number of digits; use 3 or 6 hex digits.');
    return notes;
  }

  let frames = null;
  function getFrames() {
    if (!frames) frames = { wide: frame(960), narrow: frame(400) };
    return frames;
  }

  /* Grade one activity. Returns { score, earned, total, results:[{check, ok, found}], lint:[] } */
  async function grade(activity, html, css) {
    const { wide, narrow } = getFrames();
    const src = compose(html, css);
    await Promise.all([load(wide, src), load(narrow, src)]);
    const c = makeContext(wide, narrow, { html, css });
    let earned = 0, total = 0;
    const results = activity.checks.map(ch => {
      total += ch.pts;
      let r;
      try { r = ch.test(c); } catch (e) { r = { ok: false, found: 'could not check (' + e.message + ')' }; }
      if (typeof r === 'boolean') r = { ok: r, found: r ? '' : 'not found' };
      if (r.ok) earned += ch.pts;
      return { check: ch, ok: r.ok, found: r.found || '' };
    });
    const lint = activity.edit === 'html' ? lintHtml(html) : lintCss(css);
    return { score: Math.round(100 * earned / total), earned, total, results, lint };
  }

  return { grade, compose, lintHtml, lintCss };
})();
