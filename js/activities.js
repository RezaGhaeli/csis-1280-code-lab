/*
   Trailhead Code Lab: the ten activities.
   Each activity: module, title, story, steps, which file the student edits ("html" or "css"),
   starter and solution code for both files, and weighted checks.

   A check's test(c) gets a context object (see checker.js) and returns true/false
   or { ok, found }. "explain" says why it matters; "fix" is the correct code.
*/

/* ---------- shared, given styles ---------- */
const BASE_CSS = `/* Trailhead site styles (given) */
body {
  margin: 0;
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
  line-height: 1.5;
}
header {
  background-color: #3B261A;
  color: #FAF5EE;
  padding: 16px 24px;
}
header h1 {
  margin: 0;
  font-family: "Trebuchet MS", sans-serif;
}
.tagline {
  margin: 4px 0 0;
  color: #DEB887;
  font-style: italic;
}
nav {
  background-color: #96603A;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0 12px;
  display: flex;
  gap: 4px;
}
nav a {
  display: block;
  padding: 10px 14px;
  color: #FAF5EE;
  text-decoration: none;
  font-weight: bold;
}
main {
  padding: 8px 24px 24px;
}
h2, h3 {
  color: #96603A;
  font-family: "Trebuchet MS", sans-serif;
}
img {
  max-width: 100%;
  border-radius: 6px;
}
footer {
  background-color: #3B261A;
  color: #FAF5EE;
  text-align: center;
  padding: 12px;
  font-size: 0.9em;
}
`;

const HEAD = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="stylesheet" href="style.css">
</head>`;

const TEAL = 'rgb(0, 121, 107)', COPPER = 'rgb(150, 96, 58)', BROWN = 'rgb(59, 38, 26)', CREAM = 'rgb(250, 245, 238)';

const ACTIVITIES = [

/* =====================================================================  1  */
{
  id: 1, module: 'Module 1', topic: 'Semantic HTML structure', edit: 'html',
  title: 'Build the Home Page Skeleton',
  art: 'img/hero.png',
  story: 'Trailhead Coffee needs a home page. The designer has already written the CSS; your job is the HTML structure underneath it, built from semantic elements so browsers, search engines, and screen readers understand each part.',
  steps: [
    'Inside `<body>`, add a `<header>` with an `<h1>` that says **Trailhead Coffee** and a `<p class="tagline">` with a one-line slogan.',
    'Below the header, add a `<nav>` containing a `<ul>` with **four** `<li>` items. Each item holds a link: Home (`index.html`), Menu (`menu.html`), Classes (`classes.html`), Visit (`visit.html`).',
    'Inside `<main>`, add **two** `<section>` elements. Each section must **start with** an `<h2>`.',
    'In the first section, add `<img src="img/hero.png">` with `alt` text that describes the picture (a mountain trail at sunrise with a mug of coffee), and a paragraph.',
    'In the second section, add an “Opening Hours” heading and a paragraph.',
    'After `</main>`, add a `<footer>` with a `<p>` containing `&copy; 2026 Trailhead Coffee Roasters`.'
  ],
  practise: ['header / nav / main / section / footer', 'headings', 'lists of links', 'img + alt'],
  starter: {
    html: HEAD('Trailhead Coffee') + `
<body>
  <!-- 1. header: h1 + tagline paragraph -->

  <!-- 2. nav: an unordered list of 4 links -->

  <main>
    <!-- 3. two sections, each starting with an h2 -->

  </main>

  <!-- 4. footer -->
</body>
</html>
`,
    css: BASE_CSS
  },
  solution: {
    html: HEAD('Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Small-batch coffee, fresh from the trail.</p>
  </header>

  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="classes.html">Classes</a></li>
      <li><a href="visit.html">Visit</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Welcome to the Roastery</h2>
      <img src="img/hero.png" alt="A mountain trail at sunrise with a steaming mug of coffee">
      <p>We roast small batches every morning and brew them for you all day.</p>
    </section>
    <section>
      <h2>Opening Hours</h2>
      <p>Open every day from 7 a.m. to 6 p.m.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Trailhead Coffee Roasters</p>
  </footer>
</body>
</html>
`,
    css: BASE_CSS
  },
  checks: [
    { text: 'A `<header>` contains an `<h1>` with the café name', pts: 2,
      test: c => c.ok(/trailhead/i.test(c.text('header h1')), c.has('header h1') ? 'h1 text: “' + c.text('header h1') + '”' : 'no <h1> inside a <header>'),
      explain: 'The `<header>` holds the page’s introductory content. Every page should have exactly one `<h1>`: its main title.',
      fix: '<header>\n  <h1>Trailhead Coffee</h1>\n  <p class="tagline">Small-batch coffee, fresh from the trail.</p>\n</header>' },
    { text: 'The header has a tagline paragraph with `class="tagline"`', pts: 1,
      test: c => c.has('header p.tagline'),
      explain: 'A `class` lets CSS style one particular paragraph. The given CSS turns `.tagline` gold and italic.',
      fix: '<p class="tagline">Small-batch coffee, fresh from the trail.</p>' },
    { text: 'A `<nav>` holds a `<ul>` with exactly four `<li>` items', pts: 2,
      test: c => c.ok(c.qa('nav ul > li').length === 4, c.qa('nav ul > li').length + ' list item(s) found in nav ul'),
      explain: 'Navigation is a list of links, so it is marked up as `<nav>` → `<ul>` → `<li>`. Screen readers announce “navigation, list, 4 items”.',
      fix: '<nav>\n  <ul>\n    <li><a href="index.html">Home</a></li>\n    <li><a href="menu.html">Menu</a></li>\n    <li><a href="classes.html">Classes</a></li>\n    <li><a href="visit.html">Visit</a></li>\n  </ul>\n</nav>' },
    { text: 'Every nav item contains a link (`<a>`) with an `href`', pts: 2,
      test: c => { const li = c.qa('nav li'); const good = li.filter(l => { const a = l.querySelector('a'); return a && a.getAttribute('href'); }); return c.ok(li.length > 0 && good.length === li.length, good.length + ' of ' + li.length + ' items have a link with an href'); },
      explain: 'Without `href`, an `<a>` is not a link: it cannot be clicked or reached with the keyboard.',
      fix: '<li><a href="menu.html">Menu</a></li>' },
    { text: '`<main>` contains two `<section>` elements', pts: 2,
      test: c => c.ok(c.qa('main > section').length === 2, c.qa('main > section').length + ' section(s) directly inside main'),
      explain: '`<main>` wraps the content that is unique to this page; `<section>` groups each themed part of it.',
      fix: '<main>\n  <section> … </section>\n  <section> … </section>\n</main>' },
    { text: 'Each section starts with an `<h2>`', pts: 2,
      test: c => { const s = c.qa('main > section'); const good = s.filter(x => x.firstElementChild && x.firstElementChild.tagName === 'H2'); return c.ok(s.length > 0 && good.length === s.length, good.length + ' of ' + s.length + ' sections start with an h2'); },
      explain: 'A section is a part of the page with its own heading. Using `<h2>` under the page’s `<h1>` keeps the heading outline in order.',
      fix: '<section>\n  <h2>Opening Hours</h2>\n  <p>Open every day from 7 a.m. to 6 p.m.</p>\n</section>' },
    { text: 'The hero image is in a section and has `src="img/hero.png"`', pts: 1,
      test: c => c.ok(!!c.q('main section img[src="img/hero.png"]'), c.has('img') ? 'img src: ' + c.attr('img', 'src') : 'no <img> found'),
      explain: 'Paths are relative to the HTML file: `img/hero.png` means “the file hero.png inside the img folder”.',
      fix: '<img src="img/hero.png" alt="A mountain trail at sunrise with a steaming mug of coffee">' },
    { text: 'The image has descriptive `alt` text (at least 10 characters)', pts: 2,
      test: c => { const a = c.attr('img', 'alt'); return c.ok(a !== null && a.trim().length >= 10, a === null ? 'no alt attribute' : 'alt=“' + a + '”'); },
      explain: '`alt` is read aloud by screen readers and shown if the image fails to load. Describe what is in the picture, not “image” or “photo”.',
      fix: 'alt="A mountain trail at sunrise with a steaming mug of coffee"' },
    { text: 'A `<footer>` after `<main>` contains a copyright paragraph', pts: 1,
      test: c => c.ok(c.has('footer p') && /©|2026/.test(c.text('footer p')), c.has('footer') ? 'footer text: “' + c.text('footer') + '”' : 'no <footer>'),
      explain: '`<footer>` holds closing information such as copyright and contact details. `&copy;` is the HTML entity for ©.',
      fix: '<footer>\n  <p>&copy; 2026 Trailhead Coffee Roasters</p>\n</footer>' }
  ]
},

/* =====================================================================  2  */
{
  id: 2, module: 'Module 1', topic: 'Lists, links, images, quotes', edit: 'html',
  title: 'Write the Pour-Over Brew Guide',
  art: 'img/pourover.png',
  story: 'Customers keep asking how to make pour-over coffee at home. Turn the barista’s notes into a proper web page with lists, an image, an outside link, and a customer quote.',
  steps: [
    'Under the “What you need” `<h3>`, add an **unordered** list (`<ul>`) with at least **four** items: a dripper, a paper filter, 15 g of ground coffee, and 250 g of hot water.',
    'Under “Steps”, add an **ordered** list (`<ol>`) with at least **four** steps.',
    'Inside the **second** step’s `<li>`, nest a small `<ul>` with **two** tips (for example “Pour slowly” and “Wait 30 seconds for the bloom”).',
    'Add `<img src="img/pourover.png">` with descriptive `alt` text.',
    'Add a link to `https://sca.coffee` that opens in a **new tab** (`target="_blank"`).',
    'Add a `<blockquote>` with a `cite` attribute (any URL) containing a `<p>` with a customer’s comment.'
  ],
  practise: ['ul / ol / li', 'nested lists', 'external links', 'blockquote + cite'],
  starter: {
    html: HEAD('Pour-Over Guide | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Brew guides from our baristas</p>
  </header>
  <main>
    <article>
      <h2>How to Brew a Pour-Over</h2>
      <!-- image here -->

      <h3>What you need</h3>
      <!-- unordered list -->

      <h3>Steps</h3>
      <!-- ordered list (step 2 has a nested list of tips) -->

      <h3>Learn more</h3>
      <!-- link that opens in a new tab -->

      <!-- blockquote with a cite attribute -->
    </article>
  </main>
</body>
</html>
`,
    css: BASE_CSS + `article {
  max-width: 640px;
}
blockquote {
  border-left: 5px solid #00796B;
  background-color: #EAF3F0;
  margin: 16px 0;
  padding: 8px 16px;
  font-style: italic;
}
`
  },
  solution: {
    html: HEAD('Pour-Over Guide | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Brew guides from our baristas</p>
  </header>
  <main>
    <article>
      <h2>How to Brew a Pour-Over</h2>
      <img src="img/pourover.png" alt="Coffee dripping from a pour-over cone into a teal mug">

      <h3>What you need</h3>
      <ul>
        <li>A pour-over dripper</li>
        <li>A paper filter</li>
        <li>15 g of medium-fine ground coffee</li>
        <li>250 g of water at about 94 &deg;C</li>
      </ul>

      <h3>Steps</h3>
      <ol>
        <li>Rinse the filter with hot water.</li>
        <li>Add the coffee and pour a little water.
          <ul>
            <li>Pour slowly, in circles</li>
            <li>Wait 30 seconds for the bloom</li>
          </ul>
        </li>
        <li>Pour the rest of the water.</li>
        <li>Let it drip, then enjoy.</li>
      </ol>

      <h3>Learn more</h3>
      <p>Read more at the <a href="https://sca.coffee" target="_blank">Specialty Coffee Association</a>.</p>

      <blockquote cite="https://trailhead.example/reviews">
        <p>The best pour-over I have had outside Portland!</p>
      </blockquote>
    </article>
  </main>
</body>
</html>
`,
    css: null /* same as starter */
  },
  checks: [
    { text: 'An unordered list with at least four items', pts: 2,
      test: c => { const u = c.qa('article > ul'); const n = u.length ? u[0].querySelectorAll(':scope > li').length : 0; return c.ok(n >= 4, u.length ? n + ' item(s) in the first top-level <ul>' : 'no <ul> directly inside the article'); },
      explain: 'Use `<ul>` when the order does not matter, such as a list of equipment. Each item is an `<li>`.',
      fix: '<ul>\n  <li>A pour-over dripper</li>\n  <li>A paper filter</li>\n  <li>15 g of medium-fine ground coffee</li>\n  <li>250 g of water at about 94 &deg;C</li>\n</ul>' },
    { text: 'An ordered list with at least four steps', pts: 2,
      test: c => { const o = c.q('ol'); const n = o ? o.querySelectorAll(':scope > li').length : 0; return c.ok(n >= 4, o ? n + ' step(s) in the <ol>' : 'no <ol> found'); },
      explain: 'Use `<ol>` when the order matters, such as the steps of a recipe. The browser numbers them for you.',
      fix: '<ol>\n  <li>Rinse the filter with hot water.</li>\n  <li>Add the coffee and pour a little water.</li>\n  <li>Pour the rest of the water.</li>\n  <li>Let it drip, then enjoy.</li>\n</ol>' },
    { text: 'The second step contains a nested `<ul>` with two tips', pts: 2,
      test: c => { const li = c.qa('ol > li')[1]; const n = li ? li.querySelectorAll('ul > li').length : 0; return c.ok(n >= 2, li ? n + ' nested item(s) in step 2' : 'there is no second step'); },
      explain: 'A nested list goes **inside** the `<li>` it belongs to, before that `<li>` closes. A list placed between two `<li>`s is invalid.',
      fix: '<li>Add the coffee and pour a little water.\n  <ul>\n    <li>Pour slowly, in circles</li>\n    <li>Wait 30 seconds for the bloom</li>\n  </ul>\n</li>' },
    { text: 'The pour-over image has descriptive `alt` text', pts: 2,
      test: c => { const i = c.q('img[src="img/pourover.png"]'); const a = i ? i.getAttribute('alt') : null; return c.ok(!!i && a && a.trim().length >= 10, !i ? 'no <img src="img/pourover.png">' : 'alt=“' + (a || '') + '”'); },
      explain: 'Every meaningful image needs `alt` text that says what the picture shows.',
      fix: '<img src="img/pourover.png" alt="Coffee dripping from a pour-over cone into a teal mug">' },
    { text: 'A link to an outside site that opens in a new tab', pts: 2,
      test: c => { const a = c.q('a[href^="http"]'); return c.ok(!!a && a.getAttribute('target') === '_blank', a ? 'link found; target=' + (a.getAttribute('target') || '(none)') : 'no link starting with http'); },
      explain: 'Outside links use the full address, starting with `https://`. `target="_blank"` opens a new tab, so visitors do not lose your page.',
      fix: '<a href="https://sca.coffee" target="_blank">Specialty Coffee Association</a>' },
    { text: 'A `<blockquote>` with a `cite` attribute and a paragraph inside', pts: 2,
      test: c => { const b = c.q('blockquote'); return c.ok(!!b && b.hasAttribute('cite') && !!b.querySelector('p'), !b ? 'no <blockquote>' : 'cite ' + (b.hasAttribute('cite') ? 'present' : 'missing') + '; <p> ' + (b.querySelector('p') ? 'present' : 'missing')); },
      explain: '`<blockquote>` marks text quoted from someone else. Its `cite` attribute holds the address of the source.',
      fix: '<blockquote cite="https://trailhead.example/reviews">\n  <p>The best pour-over I have had outside Portland!</p>\n</blockquote>' }
  ]
},

/* =====================================================================  3  */
{
  id: 3, module: 'Module 2', topic: 'Selectors, colour, and type', edit: 'css',
  title: 'Give the Menu Its Colours',
  art: 'img/cappuccino.png',
  story: 'The menu page works, but it is plain black on white. Use the Trailhead colours and fonts, and choose the right kind of selector for each job.',
  steps: [
    '**Type selector** `body`: `font-family: Verdana, sans-serif`, `background-color: #FAF5EE`, and `color: #3B261A`.',
    '**Group selector** `h1, h2`: `font-family: "Trebuchet MS", sans-serif` and `color: #96603A`.',
    '**Class selector** `.price`: `font-weight: bold` and `color: #00796B`.',
    '**ID selector** `#specials`: `background-color: white` and `padding: 16px`.',
    '**Descendant selector** `nav a`: `text-decoration: none`, `color: #3B261A`, and `font-weight: bold`.',
    '**Combined class selector** `.item.featured`: `border-left: 6px solid #00796B`. Only the featured item gets the border.'
  ],
  practise: ['type, group, class, id selectors', 'descendant selectors', 'colour and font properties'],
  starter: {
    html: HEAD('Menu | Trailhead Coffee') + `
<body>
  <h1>Our Menu</h1>
  <nav>
    <a href="index.html">Home</a> |
    <a href="menu.html">Menu</a> |
    <a href="visit.html">Visit</a>
  </nav>

  <section id="specials">
    <h2>Today’s Specials</h2>
    <article class="item featured">
      <h3>Maple Trail Latte</h3>
      <p>Espresso, steamed milk, and real maple syrup. <span class="price">$5.75</span></p>
    </article>
    <article class="item">
      <h3>Campfire Mocha</h3>
      <p>Dark chocolate with a toasted marshmallow. <span class="price">$5.50</span></p>
    </article>
    <article class="item">
      <h3>Cold Brew</h3>
      <p>Steeped for 18 hours, served over ice. <span class="price">$4.25</span></p>
    </article>
  </section>
</body>
</html>
`,
    css: `/* Trailhead colours:
   dark brown #3B261A   copper #96603A   cream #FAF5EE   teal #00796B */

/* 1. body (type selector) */


/* 2. h1 and h2 (group selector) */


/* 3. .price (class selector) */


/* 4. #specials (id selector) */


/* 5. nav a (descendant selector) */


/* 6. .item.featured (both classes) */

`
  },
  solution: {
    html: null,
    css: `/* Trailhead colours:
   dark brown #3B261A   copper #96603A   cream #FAF5EE   teal #00796B */

/* 1. body (type selector) */
body {
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
}

/* 2. h1 and h2 (group selector) */
h1, h2 {
  font-family: "Trebuchet MS", sans-serif;
  color: #96603A;
}

/* 3. .price (class selector) */
.price {
  font-weight: bold;
  color: #00796B;
}

/* 4. #specials (id selector) */
#specials {
  background-color: white;
  padding: 16px;
}

/* 5. nav a (descendant selector) */
nav a {
  text-decoration: none;
  color: #3B261A;
  font-weight: bold;
}

/* 6. .item.featured (both classes) */
.item.featured {
  border-left: 6px solid #00796B;
}
`
  },
  checks: [
    { text: '`body` uses the Verdana font', pts: 1,
      test: c => c.ok(/verdana/i.test(c.cs('body', 'font-family')), 'font-family: ' + c.cs('body', 'font-family')),
      explain: 'Fonts set on `body` are inherited by everything inside it. Always end the list with a generic family such as `sans-serif`.',
      fix: 'body {\n  font-family: Verdana, sans-serif;\n}' },
    { text: '`body` has the cream background and dark brown text', pts: 2,
      test: c => c.ok(c.cs('body', 'background-color') === CREAM && c.cs('body', 'color') === BROWN, 'background ' + c.cs('body', 'background-color') + ', colour ' + c.cs('body', 'color')),
      explain: '`background-color` paints behind the content; `color` sets the text colour. Hex `#FAF5EE` is the same as `rgb(250, 245, 238)`.',
      fix: 'body {\n  background-color: #FAF5EE;\n  color: #3B261A;\n}' },
    { text: 'One **group selector** styles both `h1` and `h2`', pts: 1,
      test: c => c.ok(c.rules().some(r => /(^|,)\s*h1\s*(,|$)/.test(r.selectorText) && /(^|,)\s*h2\s*(,|$)/.test(r.selectorText)), 'selectors found: ' + (c.rules().map(r => r.selectorText).join(' | ') || '(none)')),
      explain: 'A comma lists several selectors that share the same declarations, so you write them once: `h1, h2 { … }`.',
      fix: 'h1, h2 {\n  font-family: "Trebuchet MS", sans-serif;\n  color: #96603A;\n}' },
    { text: 'Headings are copper and use Trebuchet MS', pts: 2,
      test: c => c.ok(c.cs('h1', 'color') === COPPER && c.cs('h2', 'color') === COPPER && /trebuchet/i.test(c.cs('h2', 'font-family')), 'h1 ' + c.cs('h1', 'color') + ', h2 ' + c.cs('h2', 'color') + ', font ' + c.cs('h2', 'font-family')),
      explain: 'Font names with spaces must be in quotes: `"Trebuchet MS"`.',
      fix: 'h1, h2 {\n  font-family: "Trebuchet MS", sans-serif;\n  color: #96603A;\n}' },
    { text: '`.price` is bold and teal', pts: 2,
      test: c => c.ok(+c.cs('.price', 'font-weight') >= 700 && c.cs('.price', 'color') === TEAL, 'font-weight ' + c.cs('.price', 'font-weight') + ', colour ' + c.cs('.price', 'color')),
      explain: 'A class selector starts with a dot and styles **every** element with that class: all three prices change at once.',
      fix: '.price {\n  font-weight: bold;\n  color: #00796B;\n}' },
    { text: '`#specials` has a white background and 16px padding', pts: 2,
      test: c => c.ok(c.cs('#specials', 'background-color') === 'rgb(255, 255, 255)' && c.cs('#specials', 'padding-top') === '16px', 'background ' + c.cs('#specials', 'background-color') + ', padding ' + c.cs('#specials', 'padding-top')),
      explain: 'An ID selector starts with `#` and matches the one element with that `id`. IDs must be unique on a page.',
      fix: '#specials {\n  background-color: white;\n  padding: 16px;\n}' },
    { text: 'Links inside `nav` are bold, dark brown, and not underlined', pts: 2,
      test: c => c.ok(c.cs('nav a', 'text-decoration-line') === 'none' && +c.cs('nav a', 'font-weight') >= 700 && c.cs('nav a', 'color') === BROWN, 'underline: ' + c.cs('nav a', 'text-decoration-line') + ', weight ' + c.cs('nav a', 'font-weight') + ', colour ' + c.cs('nav a', 'color')),
      explain: 'A descendant selector (two selectors separated by a space) matches `a` elements **inside** a `nav` only; other links are left alone.',
      fix: 'nav a {\n  text-decoration: none;\n  color: #3B261A;\n  font-weight: bold;\n}' },
    { text: 'Only the featured item has the teal left border', pts: 2,
      test: c => { const f = c.q('.item.featured'), o = c.qa('.item:not(.featured)')[0]; const fw = f ? c.win.getComputedStyle(f).borderLeftWidth : '0px', ow = o ? c.win.getComputedStyle(o).borderLeftWidth : '0px'; const fc = f ? c.win.getComputedStyle(f).borderLeftColor : ''; return c.ok(fw === '6px' && fc === TEAL && ow === '0px', 'featured item border ' + fw + ' ' + fc + '; other items ' + ow); },
      explain: '`.item.featured` (no space) means “an element with **both** classes”. `.item .featured` (with a space) would mean a featured element **inside** an item.',
      fix: '.item.featured {\n  border-left: 6px solid #00796B;\n}' }
  ]
},

/* =====================================================================  4  */
{
  id: 4, module: 'Module 2', topic: 'Box model, units, list styling', edit: 'css',
  title: 'Style the Daily Special Card',
  art: 'img/maple.png',
  story: 'The café wants a “Daily Special” card on the home page: a neat box, centred, with a clean list of features and a button. This is the box model in action.',
  steps: [
    '`.card`: `box-sizing: border-box`, `width: 340px`, `padding: 20px`, `border: 2px solid #96603A`, `border-radius: 10px`, `background-color: white`, and `margin: 30px auto` (centred).',
    '`.card h2`: `font-size: 1.5em` (1.5 × the card’s 16px text = 24px).',
    '`.features`: remove the bullets with `list-style-type: none` and set `padding-left: 0`.',
    '`.features li`: `padding: 6px 0` and `border-bottom: 1px dotted #C9B8A6`.',
    '`.btn`: `display: inline-block`, `padding: 10px 18px`, `background-color: #00796B`, `color: white`, `border-radius: 4px`, and `text-decoration: none`.'
  ],
  practise: ['padding, border, margin', 'box-sizing', 'em units', 'list-style'],
  starter: {
    html: HEAD('Daily Special | Trailhead Coffee') + `
<body>
  <div class="card">
    <h2>Daily Special</h2>
    <img src="img/maple.png" alt="A maple latte in a tall glass">
    <ul class="features">
      <li>Double shot of espresso</li>
      <li>Real Vermont maple syrup</li>
      <li>Oat milk available</li>
    </ul>
    <p class="price">Only $5.75 today</p>
    <a class="btn" href="menu.html">See the full menu</a>
  </div>
</body>
</html>
`,
    css: `body {
  font-family: Verdana, sans-serif;
  font-size: 16px;
  background-color: #FAF5EE;
  color: #3B261A;
}
img {
  display: block;
  max-width: 100%;
}

/* 1. the card box */


/* 2. the card heading (use em) */


/* 3. the features list */


/* 4. each list item */


/* 5. the button */

`
  },
  solution: {
    html: null,
    css: `body {
  font-family: Verdana, sans-serif;
  font-size: 16px;
  background-color: #FAF5EE;
  color: #3B261A;
}
img {
  display: block;
  max-width: 100%;
}

/* 1. the card box */
.card {
  box-sizing: border-box;
  width: 340px;
  padding: 20px;
  border: 2px solid #96603A;
  border-radius: 10px;
  background-color: white;
  margin: 30px auto;
}

/* 2. the card heading (use em) */
.card h2 {
  font-size: 1.5em;
}

/* 3. the features list */
.features {
  list-style-type: none;
  padding-left: 0;
}

/* 4. each list item */
.features li {
  padding: 6px 0;
  border-bottom: 1px dotted #C9B8A6;
}

/* 5. the button */
.btn {
  display: inline-block;
  padding: 10px 18px;
  background-color: #00796B;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
`
  },
  checks: [
    { text: 'The card is exactly 340px wide **including** padding and border', pts: 2,
      test: c => { const w = c.rect('.card').width; return c.ok(Math.abs(w - 340) < 1, 'rendered width: ' + Math.round(w) + 'px'); },
      explain: 'By default `width` sets only the content box, so 340 + 2×20 padding + 2×2 border = 384px. `box-sizing: border-box` makes `width` include padding and border.',
      fix: '.card {\n  box-sizing: border-box;\n  width: 340px;\n}' },
    { text: 'The card has 20px padding and a 2px solid copper border', pts: 2,
      test: c => c.ok(c.cs('.card', 'padding-left') === '20px' && c.cs('.card', 'border-top-width') === '2px' && c.cs('.card', 'border-top-style') === 'solid' && c.cs('.card', 'border-top-color') === COPPER, 'padding ' + c.cs('.card', 'padding-left') + ', border ' + c.cs('.card', 'border-top-width') + ' ' + c.cs('.card', 'border-top-style') + ' ' + c.cs('.card', 'border-top-color')),
      explain: 'Padding is the space **inside** the border; the `border` shorthand takes width, style, and colour.',
      fix: '.card {\n  padding: 20px;\n  border: 2px solid #96603A;\n}' },
    { text: 'The card has rounded corners (10px) and a white background', pts: 1,
      test: c => c.ok(c.cs('.card', 'border-top-left-radius') === '10px' && c.cs('.card', 'background-color') === 'rgb(255, 255, 255)', 'radius ' + c.cs('.card', 'border-top-left-radius') + ', background ' + c.cs('.card', 'background-color')),
      explain: '`border-radius` rounds all four corners at once.',
      fix: '.card {\n  border-radius: 10px;\n  background-color: white;\n}' },
    { text: 'The card is centred horizontally', pts: 2,
      test: c => { const k = c.q('.card'); if (!k) return c.ok(false, 'no .card'); const r = k.getBoundingClientRect(), p = k.parentElement.getBoundingClientRect(); const off = Math.round((r.left + r.width / 2) - (p.left + p.width / 2)); return c.ok(Math.abs(off) < 2 && r.width < p.width - 20, off === 0 ? 'centred' : 'the card is ' + Math.abs(off) + 'px ' + (off < 0 ? 'left' : 'right') + ' of centre (margins ' + c.cs('.card', 'margin-left') + ' / ' + c.cs('.card', 'margin-right') + ')'); },
      explain: 'A block with a fixed width is centred by setting its left and right margins to `auto`: the browser shares the leftover space equally.',
      fix: '.card {\n  margin: 30px auto;\n}' },
    { text: 'The card heading uses `em` and comes out at 24px', pts: 1,
      test: c => c.ok(c.cs('.card h2', 'font-size') === '24px' && /font-size\s*:\s*1\.5em/i.test(c.src.css), 'font-size ' + c.cs('.card h2', 'font-size')),
      explain: '`em` is relative to the parent’s font size: 1.5em × 16px = 24px. If the base size changes, the heading scales with it.',
      fix: '.card h2 {\n  font-size: 1.5em;\n}' },
    { text: 'The features list has no bullets and no left padding', pts: 2,
      test: c => c.ok(c.cs('.features', 'list-style-type') === 'none' && c.cs('.features', 'padding-left') === '0px', 'list-style ' + c.cs('.features', 'list-style-type') + ', padding-left ' + c.cs('.features', 'padding-left')),
      explain: 'Browsers give lists bullets and about 40px of left padding. Remove both for a clean list inside a card.',
      fix: '.features {\n  list-style-type: none;\n  padding-left: 0;\n}' },
    { text: 'Each feature has 6px vertical padding and a dotted bottom border', pts: 1,
      test: c => c.ok(c.cs('.features li', 'padding-top') === '6px' && c.cs('.features li', 'border-bottom-style') === 'dotted', 'padding-top ' + c.cs('.features li', 'padding-top') + ', border-bottom ' + c.cs('.features li', 'border-bottom-style')),
      explain: '`padding: 6px 0` means 6px top and bottom, 0 left and right.',
      fix: '.features li {\n  padding: 6px 0;\n  border-bottom: 1px dotted #C9B8A6;\n}' },
    { text: 'The link looks like a teal button', pts: 3,
      test: c => c.ok(c.cs('.btn', 'display') === 'inline-block' && c.cs('.btn', 'background-color') === TEAL && c.cs('.btn', 'color') === 'rgb(255, 255, 255)' && c.cs('.btn', 'text-decoration-line') === 'none' && c.cs('.btn', 'padding-top') === '10px', 'display ' + c.cs('.btn', 'display') + ', background ' + c.cs('.btn', 'background-color') + ', padding ' + c.cs('.btn', 'padding-top') + ', underline ' + c.cs('.btn', 'text-decoration-line')),
      explain: 'Links are inline, so vertical padding does not push other content away. `inline-block` lets the padding take up space, like a real button.',
      fix: '.btn {\n  display: inline-block;\n  padding: 10px 18px;\n  background-color: #00796B;\n  color: white;\n  border-radius: 4px;\n  text-decoration: none;\n}' }
  ]
},

/* =====================================================================  5  */
{
  id: 5, module: 'Module 3', topic: 'Float and clear', edit: 'css',
  title: 'Wrap Text Around the Roaster',
  art: 'img/roaster.png',
  story: 'The “Our Story” page should read like a magazine: the roaster photo on the left with text flowing around it, a fact box on the right, and a footer that waits below both.',
  steps: [
    '`.story-img`: `float: left`, `width: 220px`, and `margin: 0 18px 10px 0` (space on the right and below).',
    '`.fact-box`: `float: right` and `width: 30%`. (Its colours and padding are given.)',
    '`footer`: `clear: both`, so it starts below **both** floats.'
  ],
  practise: ['float: left / right', 'margins around floats', 'clear'],
  starter: {
    html: HEAD('Our Story | Trailhead Coffee') + `
<body>
  <article class="story">
    <h2>Our Story</h2>
    <img class="story-img" src="img/roaster.png" alt="Trailhead's small drum roaster">
    <aside class="fact-box">
      <h3>Did you know?</h3>
      <p>A batch on our roaster takes 12 minutes and makes 5 kg of coffee.</p>
    </aside>
    <p>Trailhead started in 2019 with one small drum roaster in a garage at the foot of the
       Ridgeline trail. Hikers stopped by for a cup on their way up the mountain.</p>
    <p>Today we roast five days a week, in small batches, so every bag you buy was roasted in
       the last few days.</p>
  </article>
  <footer>Trailhead Coffee Roasters &middot; 27 Ridgeline Ave.</footer>
</body>
</html>
`,
    css: `body {
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
  margin: 0;
  padding: 20px;
}
.story h2 {
  color: #96603A;
}
.fact-box {
  background-color: #EAF3F0;
  border-left: 5px solid #00796B;
  padding: 10px 14px;
  margin: 0 0 10px 18px;
}
footer {
  background-color: #3B261A;
  color: #FAF5EE;
  padding: 10px;
  text-align: center;
}

/* 1. float the image left */


/* 2. float the fact box right */


/* 3. keep the footer below the floats */

`
  },
  solution: {
    html: null,
    css: `body {
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
  margin: 0;
  padding: 20px;
}
.story h2 {
  color: #96603A;
}
.fact-box {
  background-color: #EAF3F0;
  border-left: 5px solid #00796B;
  padding: 10px 14px;
  margin: 0 0 10px 18px;
}
footer {
  background-color: #3B261A;
  color: #FAF5EE;
  padding: 10px;
  text-align: center;
}

/* 1. float the image left */
.story-img {
  float: left;
  width: 220px;
  margin: 0 18px 10px 0;
}

/* 2. float the fact box right */
.fact-box {
  float: right;
  width: 30%;
}

/* 3. keep the footer below the floats */
footer {
  clear: both;
}
`
  },
  checks: [
    { text: 'The image floats left', pts: 2,
      test: c => c.ok(c.cs('.story-img', 'float') === 'left', 'float: ' + c.cs('.story-img', 'float')),
      explain: '`float: left` pushes the image to the left edge and lets the paragraphs flow around its right side.',
      fix: '.story-img {\n  float: left;\n}' },
    { text: 'The image is 220px wide with space on its right', pts: 2,
      test: c => c.ok(Math.abs(c.rect('.story-img').width - 220) < 1 && c.px(c.cs('.story-img', 'margin-right')) >= 12, 'width ' + Math.round(c.rect('.story-img').width) + 'px, margin-right ' + c.cs('.story-img', 'margin-right')),
      explain: 'Without a margin, the wrapped text touches the picture. `margin: 0 18px 10px 0` is top, right, bottom, left (clockwise).',
      fix: '.story-img {\n  width: 220px;\n  margin: 0 18px 10px 0;\n}' },
    { text: 'The fact box floats right at 30% of the article’s width', pts: 3,
      test: c => { const a = c.rect('.story').width, f = c.rect('.fact-box'); const ratio = f.width / a; return c.ok(c.cs('.fact-box', 'float') === 'right' && ratio > 0.27 && ratio < 0.36, 'float ' + c.cs('.fact-box', 'float') + ', width ' + Math.round(ratio * 100) + '% of the article'); },
      explain: 'A floated element needs a width, or it shrinks to fit its content. A percentage is relative to the containing block.',
      fix: '.fact-box {\n  float: right;\n  width: 30%;\n}' },
    { text: 'The footer clears both floats', pts: 2,
      test: c => c.ok(c.cs('footer', 'clear') === 'both', 'clear: ' + c.cs('footer', 'clear')),
      explain: '`clear: both` tells an element to move down until it is below every earlier left **and** right float.',
      fix: 'footer {\n  clear: both;\n}' },
    { text: 'The footer starts below the image and the fact box', pts: 1,
      test: c => { const floats = c.cs('.story-img', 'float') !== 'none' || c.cs('.fact-box', 'float') !== 'none'; const ft = c.rect('footer').top, b = Math.max(c.rect('.story-img').bottom, c.rect('.fact-box').bottom); return c.ok(floats && ft >= b - 1, !floats ? 'nothing is floated yet' : 'footer top ' + Math.round(ft) + 'px, lowest float bottom ' + Math.round(b) + 'px'); },
      explain: 'This is the visible result of `clear`. Without it the footer’s background slides up under the floats.',
      fix: 'footer {\n  clear: both;\n}' }
  ]
},

/* =====================================================================  6  */
{
  id: 6, module: 'Module 4', topic: 'CSS Grid', edit: 'css',
  title: 'Lay Out the Café Menu with Grid',
  art: 'img/espresso.png',
  story: 'Six drinks, three per row, all the same width, with a title across the top and the featured drink twice as wide. A two-dimensional layout is a job for CSS Grid.',
  steps: [
    '`.menu`: `display: grid`, `grid-template-columns: repeat(3, 1fr)`, and `gap: 20px`.',
    '`.menu h2`: make the title span every column with `grid-column: 1 / -1`.',
    '`.wide`: make the featured drink span two columns with `grid-column: span 2`.'
  ],
  practise: ['display: grid', 'repeat() and fr', 'gap', 'grid-column spans'],
  starter: {
    html: HEAD('Menu | Trailhead Coffee') + `
<body>
  <section class="menu">
    <h2>Coffee Menu</h2>
    <article class="item wide">
      <img src="img/espresso.png" alt="A cup of espresso">
      <h3>Espresso</h3><p>$3.25</p>
    </article>
    <article class="item">
      <img src="img/cappuccino.png" alt="A cappuccino">
      <h3>Cappuccino</h3><p>$4.50</p>
    </article>
    <article class="item">
      <img src="img/chai.png" alt="A chai latte">
      <h3>Chai Latte</h3><p>$4.75</p>
    </article>
    <article class="item">
      <img src="img/coldbrew.png" alt="A glass of cold brew">
      <h3>Cold Brew</h3><p>$4.25</p>
    </article>
    <article class="item">
      <img src="img/pourover.png" alt="A pour-over">
      <h3>Pour-Over</h3><p>$4.00</p>
    </article>
  </section>
</body>
</html>
`,
    css: `body {
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
  padding: 20px;
}
.menu h2 {
  color: #96603A;
  margin: 0;
}
.item {
  background-color: white;
  border: 1px solid #E1D2BE;
  border-radius: 6px;
  padding: 10px;
}
.item img {
  display: block;
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 4px;
}
.item h3 {
  margin: 8px 0 0;
}

/* 1. the grid container */


/* 2. the title spans every column */


/* 3. the featured drink spans two columns */

`
  },
  solution: {
    html: null,
    css: null /* filled below */
  },
  checks: [
    { text: '`.menu` is a grid container', pts: 2,
      test: c => c.ok(c.cs('.menu', 'display') === 'grid', 'display: ' + c.cs('.menu', 'display')),
      explain: '`display: grid` turns the element into a grid container; its direct children become grid items.',
      fix: '.menu {\n  display: grid;\n}' },
    { text: 'The grid has three equal columns', pts: 3,
      test: c => { const t = c.cs('.menu', 'grid-template-columns').split(' ').map(parseFloat).filter(n => !isNaN(n)); const eq = t.length === 3 && Math.max(...t) - Math.min(...t) < 1; return c.ok(eq, 'columns: ' + (t.length ? t.map(n => Math.round(n) + 'px').join(', ') : 'none')); },
      explain: '`1fr` is one share of the free space, so `repeat(3, 1fr)` makes three equal columns that stretch with the page.',
      fix: '.menu {\n  grid-template-columns: repeat(3, 1fr);\n}' },
    { text: 'The columns are set with `fr` units (not fixed pixels)', pts: 1,
      test: c => c.ok(c.rules().some(r => r.style && /fr/.test(r.style.getPropertyValue('grid-template-columns'))), 'grid-template-columns rule: ' + (c.rules().map(r => r.style && r.style.getPropertyValue('grid-template-columns')).filter(Boolean).join(' | ') || 'none')),
      explain: 'Pixel columns do not adapt to the screen. Fractions share whatever width is available.',
      fix: 'grid-template-columns: repeat(3, 1fr);' },
    { text: 'There is a 20px gap between rows and columns', pts: 1,
      test: c => c.ok(c.cs('.menu', 'column-gap') === '20px' && c.cs('.menu', 'row-gap') === '20px', 'column-gap ' + c.cs('.menu', 'column-gap') + ', row-gap ' + c.cs('.menu', 'row-gap')),
      explain: '`gap` adds space **between** grid tracks only, never around the outside edge.',
      fix: '.menu {\n  gap: 20px;\n}' },
    { text: 'The title spans the full width of the grid', pts: 2,
      test: c => { const m = c.q('.menu'); if (!m) return c.ok(false, 'no .menu'); const inner = m.clientWidth - c.px(c.cs('.menu', 'padding-left')) - c.px(c.cs('.menu', 'padding-right')); return c.ok(c.cs('.menu', 'display') === 'grid' && Math.abs(c.rect('.menu h2').width - inner) < 2, 'title width ' + Math.round(c.rect('.menu h2').width) + 'px of ' + Math.round(inner) + 'px'); },
      explain: 'Grid lines are numbered from 1; `-1` is the last line. `grid-column: 1 / -1` stretches an item from the first line to the last.',
      fix: '.menu h2 {\n  grid-column: 1 / -1;\n}' },
    { text: 'The featured drink spans two columns', pts: 2,
      test: c => { const t = c.cs('.menu', 'grid-template-columns').split(' ').map(parseFloat).filter(n => !isNaN(n)); const g = c.px(c.cs('.menu', 'column-gap')) || 0; const want = t.length >= 2 ? t[0] + t[1] + g : -1; const w = c.rect('.wide').width; return c.ok(want > 0 && Math.abs(w - want) < 2, 'featured width ' + Math.round(w) + 'px; two columns + gap = ' + Math.round(want) + 'px'); },
      explain: '`span 2` makes an item cover two tracks from wherever it starts. The other items flow into the cells that are left.',
      fix: '.wide {\n  grid-column: span 2;\n}' }
  ]
},

/* =====================================================================  7  */
{
  id: 7, module: 'Module 5', topic: 'Flexbox', edit: 'css',
  title: 'Build the Header and Class Cards with Flexbox',
  art: 'img/barista.png',
  story: 'The coffee-classes page needs a header with the logo on the left and the menu on the right, and a row of class cards that share the space and wrap on smaller screens. One-dimensional rows are what Flexbox does best.',
  steps: [
    '`.site-header`: `display: flex`, `justify-content: space-between`, and `align-items: center`.',
    '`nav ul`: `display: flex`, `gap: 8px`, `list-style: none`, and `margin: 0`.',
    '`.cards`: `display: flex`, `flex-wrap: wrap`, and `gap: 16px`.',
    '`.card`: `flex: 1 1 200px` (grow, shrink, start at 200px), so the three cards share the row equally.'
  ],
  practise: ['display: flex', 'justify-content / align-items', 'gap and flex-wrap', 'the flex shorthand'],
  starter: {
    html: HEAD('Classes | Trailhead Coffee') + `
<body>
  <header class="site-header">
    <img class="logo" src="img/logo.png" alt="Trailhead Coffee Roasters">
    <nav>
      <ul>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="classes.html">Classes</a></li>
        <li><a href="visit.html">Visit</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>Saturday Classes</h2>
    <div class="cards">
      <article class="card"><img src="img/espresso.png" alt="Espresso"><h3>Home Barista</h3><p>2 hours &middot; $45</p></article>
      <article class="card"><img src="img/barista.png" alt="Latte art"><h3>Latte Art</h3><p>2 hours &middot; $55</p></article>
      <article class="card"><img src="img/cupping.png" alt="Cupping bowls"><h3>Cupping 101</h3><p>1 hour &middot; $25</p></article>
    </div>
  </main>
</body>
</html>
`,
    css: `body {
  margin: 0;
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
}
.site-header {
  background-color: #3B261A;
  padding: 10px 24px;
}
.logo {
  width: 240px;
}
nav a {
  display: block;
  padding: 8px 12px;
  color: #FAF5EE;
  text-decoration: none;
  font-weight: bold;
}
main {
  padding: 0 24px 24px;
}
.card {
  background-color: white;
  border: 1px solid #E1D2BE;
  border-radius: 6px;
  padding: 10px;
}
.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

/* 1. header: logo left, nav right, centred vertically */


/* 2. nav links in a row */


/* 3. the card container */


/* 4. each card */

`
  },
  solution: { html: null, css: null },
  checks: [
    { text: 'The header is a flex container', pts: 1,
      test: c => c.ok(c.cs('.site-header', 'display') === 'flex', 'display: ' + c.cs('.site-header', 'display')),
      explain: '`display: flex` makes the logo and the nav sit side by side as flex items.',
      fix: '.site-header {\n  display: flex;\n}' },
    { text: 'Logo and nav are pushed to opposite ends', pts: 2,
      test: c => c.ok(c.cs('.site-header', 'justify-content') === 'space-between', 'justify-content: ' + c.cs('.site-header', 'justify-content')),
      explain: '`justify-content` shares free space along the **main axis**. `space-between` puts the first item at the start and the last at the end.',
      fix: '.site-header {\n  justify-content: space-between;\n}' },
    { text: 'Header items are centred vertically', pts: 1,
      test: c => c.ok(c.cs('.site-header', 'align-items') === 'center', 'align-items: ' + c.cs('.site-header', 'align-items')),
      explain: '`align-items` lines items up on the **cross axis** (vertical, in a row).',
      fix: '.site-header {\n  align-items: center;\n}' },
    { text: 'The nav links sit in one row with no bullets', pts: 2,
      test: c => c.ok(c.cs('nav ul', 'display') === 'flex' && c.cs('nav ul', 'list-style-type') === 'none' && c.px(c.cs('nav ul', 'column-gap')) >= 4, 'display ' + c.cs('nav ul', 'display') + ', list-style ' + c.cs('nav ul', 'list-style-type') + ', gap ' + c.cs('nav ul', 'column-gap')),
      explain: 'The `<ul>` is the flex container here, and its `<li>`s are the flex items. A nested container is normal in Flexbox.',
      fix: 'nav ul {\n  display: flex;\n  gap: 8px;\n  list-style: none;\n  margin: 0;\n}' },
    { text: 'The card container is a wrapping flex row with a 16px gap', pts: 2,
      test: c => c.ok(c.cs('.cards', 'display') === 'flex' && c.cs('.cards', 'flex-wrap') === 'wrap' && c.cs('.cards', 'column-gap') === '16px', 'display ' + c.cs('.cards', 'display') + ', flex-wrap ' + c.cs('.cards', 'flex-wrap') + ', gap ' + c.cs('.cards', 'column-gap')),
      explain: 'Without `flex-wrap: wrap`, flex items squeeze onto one line however narrow the screen gets.',
      fix: '.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}' },
    { text: 'Each card grows from a 200px basis', pts: 2,
      test: c => c.ok(c.cs('.card', 'flex-grow') === '1' && c.cs('.card', 'flex-basis') === '200px', 'flex-grow ' + c.cs('.card', 'flex-grow') + ', flex-basis ' + c.cs('.card', 'flex-basis')),
      explain: '`flex: 1 1 200px` is grow, shrink, basis: start at 200px, then take an equal share of any extra space.',
      fix: '.card {\n  flex: 1 1 200px;\n}' },
    { text: 'The three cards are the same width and on one row', pts: 2,
      test: c => { const r = c.qa('.card').map(e => e.getBoundingClientRect()); if (r.length < 3) return c.ok(false, 'fewer than 3 cards'); const w = r.map(x => x.width), top = r.map(x => Math.round(x.top)); return c.ok(Math.max(...w) - Math.min(...w) < 2 && new Set(top).size === 1, 'widths ' + w.map(Math.round).join(', ') + 'px'); },
      explain: 'Equal `flex-grow` values share the spare space equally, so cards with the same basis end up the same width.',
      fix: '.card {\n  flex: 1 1 200px;\n}' }
  ]
},

/* =====================================================================  8  */
{
  id: 8, module: 'Module 5', topic: 'Responsive design, media queries', edit: 'css',
  title: 'Make the Page Work on a Phone',
  art: 'img/coldbrew.png',
  story: 'The menu page looks great on a laptop, but on a phone the three columns are tiny and the header is cramped. Add a media query that changes the layout on screens 600px wide or less, and leave the desktop layout exactly as it is.',
  steps: [
    'Below the given rules, write `@media (max-width: 600px) { … }`.',
    'Inside it, stack the header: `.site-header { flex-direction: column; }`.',
    'Make the menu one column: `.menu { grid-template-columns: 1fr; }`.',
    'Let the nav links wrap and centre them: `nav ul { flex-wrap: wrap; justify-content: center; }`.',
    'Make the page title smaller: `h1 { font-size: 1.4em; }`.',
    'Use the **Desktop / Phone** switch above the preview to test both sizes.'
  ],
  practise: ['@media (max-width: …)', 'changing flex-direction', 'changing grid columns', 'the viewport meta tag'],
  starter: {
    html: HEAD('Menu | Trailhead Coffee') + `
<body>
  <header class="site-header">
    <h1>Trailhead Coffee</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="classes.html">Classes</a></li>
        <li><a href="visit.html">Visit</a></li>
      </ul>
    </nav>
  </header>
  <section class="menu">
    <article class="item"><img src="img/espresso.png" alt="Espresso"><h3>Espresso</h3></article>
    <article class="item"><img src="img/cappuccino.png" alt="Cappuccino"><h3>Cappuccino</h3></article>
    <article class="item"><img src="img/chai.png" alt="Chai latte"><h3>Chai Latte</h3></article>
    <article class="item"><img src="img/coldbrew.png" alt="Cold brew"><h3>Cold Brew</h3></article>
    <article class="item"><img src="img/pourover.png" alt="Pour-over"><h3>Pour-Over</h3></article>
    <article class="item"><img src="img/maple.png" alt="Maple latte"><h3>Maple Latte</h3></article>
  </section>
</body>
</html>
`,
    css: `body {
  margin: 0;
  font-family: Verdana, sans-serif;
  background-color: #FAF5EE;
  color: #3B261A;
}
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3B261A;
  padding: 10px 20px;
}
h1 {
  color: #FAF5EE;
  font-size: 2em;
  margin: 0;
}
nav ul {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav a {
  display: block;
  padding: 8px 10px;
  color: #FAF5EE;
  text-decoration: none;
}
.menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
}
.item {
  background-color: white;
  border-radius: 6px;
  padding: 10px;
}
.item img {
  display: block;
  width: 100%;
  height: 110px;
  object-fit: cover;
}

/* Phones: 600px and narrower */

`
  },
  solution: { html: null, css: null },
  checks: [
    { text: 'There is an `@media` rule with `max-width`', pts: 1,
      test: c => c.ok(c.media().some(m => /max-width/i.test(m.conditionText || m.media.mediaText)), 'media queries: ' + (c.media().map(m => m.conditionText || m.media.mediaText).join(' | ') || 'none')),
      explain: 'A media query applies its rules only when the condition is true; `max-width: 600px` means “screens 600px wide or less”.',
      fix: '@media (max-width: 600px) {\n  …\n}' },
    { text: 'On a phone the header stacks into a column', pts: 2,
      test: c => c.ok(c.csN('.site-header', 'flex-direction') === 'column', 'phone flex-direction: ' + c.csN('.site-header', 'flex-direction')),
      explain: 'Switching `flex-direction` to `column` turns the main axis vertical, so the title sits above the nav.',
      fix: '@media (max-width: 600px) {\n  .site-header {\n    flex-direction: column;\n  }\n}' },
    { text: 'On a phone the menu has one column', pts: 3,
      test: c => { const n = c.csN('.menu', 'grid-template-columns').split(' ').filter(x => parseFloat(x)).length; return c.ok(n === 1, 'phone columns: ' + n); },
      explain: 'Only the column template changes; the grid, the gap, and the items stay the same.',
      fix: '@media (max-width: 600px) {\n  .menu {\n    grid-template-columns: 1fr;\n  }\n}' },
    { text: 'On a phone the nav links wrap and are centred', pts: 2,
      test: c => c.ok(c.csN('nav ul', 'flex-wrap') === 'wrap' && c.csN('nav ul', 'justify-content') === 'center', 'phone flex-wrap ' + c.csN('nav ul', 'flex-wrap') + ', justify-content ' + c.csN('nav ul', 'justify-content')),
      explain: 'Wrapping stops the four links from overflowing the narrow screen; centring keeps them tidy under the title.',
      fix: '@media (max-width: 600px) {\n  nav ul {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}' },
    { text: 'On a phone the title is smaller', pts: 1,
      test: c => c.ok(c.px(c.csN('h1', 'font-size')) < c.px(c.cs('h1', 'font-size')), 'desktop ' + c.cs('h1', 'font-size') + ', phone ' + c.csN('h1', 'font-size')),
      explain: 'A 32px title takes too much room on a phone. 1.4em of the 16px body text is about 22px.',
      fix: '@media (max-width: 600px) {\n  h1 {\n    font-size: 1.4em;\n  }\n}' },
    { text: 'The desktop layout is unchanged (row header, three columns)', pts: 2,
      test: c => { const n = c.cs('.menu', 'grid-template-columns').split(' ').filter(x => parseFloat(x)).length; const mq = c.media().length > 0; return c.ok(mq && c.cs('.site-header', 'flex-direction') === 'row' && n === 3, !mq ? 'no media query yet' : 'desktop flex-direction ' + c.cs('.site-header', 'flex-direction') + ', columns ' + n); },
      explain: 'Rules **outside** the media query are for every screen. If you change them, the desktop layout breaks too.',
      fix: '/* keep the original rules; put phone changes only inside @media */' }
  ]
},

/* =====================================================================  9  */
{
  id: 9, module: 'Module 6', topic: 'Video and audio', edit: 'html',
  title: 'Add the Roastery Tour and the Podcast',
  art: 'img/beans.png',
  story: 'Trailhead filmed a 30-second tour of the roastery and records a short podcast. Put both on the Visit page so they play in every browser, can be watched with the sound off, and never start by themselves.',
  steps: [
    'Add a `<video>` with `controls`, `poster="media/tour-poster.jpg"`, and `preload="metadata"`. Do **not** use `autoplay`.',
    'Inside it, add two `<source>` elements: `media/tour.webm` (`type="video/webm"`) **first**, then `media/tour.mp4` (`type="video/mp4"`).',
    'After the sources, add `<track src="media/tour-captions.vtt" kind="captions" srclang="en" label="English" default>`.',
    'Still inside the video, add a fallback sentence (for example “Your browser cannot play this video.”).',
    'Below the heading “Trailhead Radio”, add an `<audio controls>` with one `<source>`: `media/trailhead-radio-ep1.m4a` with `type="audio/mp4"`.'
  ],
  practise: ['video / audio', 'controls, poster, preload', 'source + type', 'track captions'],
  starter: {
    html: HEAD('Visit | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Visit the roastery</p>
  </header>
  <main>
    <section>
      <h2>Take the Roastery Tour</h2>
      <!-- video with two sources, captions, and fallback text -->

    </section>
    <section>
      <h2>Trailhead Radio</h2>
      <!-- audio player -->

    </section>
  </main>
</body>
</html>
`,
    css: BASE_CSS + `video {
  display: block;
  width: 100%;
  max-width: 640px;
  aspect-ratio: 16 / 9;
  background-color: black;
}
audio {
  width: 100%;
  max-width: 640px;
}
`
  },
  solution: {
    html: HEAD('Visit | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Visit the roastery</p>
  </header>
  <main>
    <section>
      <h2>Take the Roastery Tour</h2>
      <video controls poster="media/tour-poster.jpg" preload="metadata">
        <source src="media/tour.webm" type="video/webm">
        <source src="media/tour.mp4" type="video/mp4">
        <track src="media/tour-captions.vtt" kind="captions" srclang="en" label="English" default>
        Your browser cannot play this video.
      </video>
    </section>
    <section>
      <h2>Trailhead Radio</h2>
      <audio controls>
        <source src="media/trailhead-radio-ep1.m4a" type="audio/mp4">
        Your browser cannot play audio.
      </audio>
    </section>
  </main>
</body>
</html>
`,
    css: null
  },
  checks: [
    { text: 'A `<video>` with `controls`', pts: 2,
      test: c => c.ok(!!c.q('video[controls]'), c.has('video') ? 'video found, controls ' + (c.q('video[controls]') ? 'present' : 'missing') : 'no <video>'),
      explain: 'Without `controls` the browser shows no play button, so visitors cannot start the video.',
      fix: '<video controls> … </video>' },
    { text: 'The video has a poster and `preload="metadata"`', pts: 2,
      test: c => c.ok(c.attr('video', 'poster') === 'media/tour-poster.jpg' && c.attr('video', 'preload') === 'metadata', 'poster=' + c.attr('video', 'poster') + ', preload=' + c.attr('video', 'preload')),
      explain: '`poster` shows an image until the video plays; `preload="metadata"` downloads only the length and size, saving data.',
      fix: '<video controls poster="media/tour-poster.jpg" preload="metadata">' },
    { text: 'The video does not autoplay', pts: 1,
      test: c => c.ok(c.has('video') && !c.q('video[autoplay]'), c.q('video[autoplay]') ? 'autoplay is set' : 'no autoplay'),
      explain: 'A narrated video should never start by itself. Browsers block autoplay with sound anyway; only a `muted` background loop may autoplay.',
      fix: '<video controls …>   <!-- no autoplay -->' },
    { text: 'Two `<source>` elements, each with a `type`', pts: 2,
      test: c => { const s = c.qa('video source'); return c.ok(s.length >= 2 && s.every(x => x.getAttribute('type')), s.length + ' source(s); with type: ' + s.filter(x => x.getAttribute('type')).length); },
      explain: 'The browser plays the first source it supports. `type` lets it skip a format without downloading it.',
      fix: '<source src="media/tour.webm" type="video/webm">\n<source src="media/tour.mp4" type="video/mp4">' },
    { text: 'WebM is listed before MP4', pts: 1,
      test: c => { const s = c.qa('video source').map(x => x.getAttribute('src') || ''); return c.ok(s.length >= 2 && /webm$/i.test(s[0]) && /mp4$/i.test(s[1]), 'order: ' + (s.join(', ') || 'none')); },
      explain: 'WebM files are usually smaller. Browsers that can play WebM get it; Safari skips to the MP4.',
      fix: '<source src="media/tour.webm" type="video/webm">\n<source src="media/tour.mp4" type="video/mp4">' },
    { text: 'A captions `<track>` with `src`, `kind`, `srclang`, and `label`', pts: 3,
      test: c => { const t = c.q('video track'); return c.ok(!!t && t.getAttribute('src') === 'media/tour-captions.vtt' && t.getAttribute('kind') === 'captions' && t.getAttribute('srclang') === 'en' && !!t.getAttribute('label'), t ? 'track: src=' + t.getAttribute('src') + ' kind=' + t.getAttribute('kind') + ' srclang=' + t.getAttribute('srclang') + ' label=' + t.getAttribute('label') : 'no <track>'); },
      explain: 'Captions help Deaf and hard-of-hearing visitors and anyone watching with the sound off. `default` turns them on automatically.',
      fix: '<track src="media/tour-captions.vtt" kind="captions" srclang="en" label="English" default>' },
    { text: 'The video contains fallback text', pts: 1,
      test: c => { const v = c.q('video'); const t = v ? v.textContent.trim() : ''; return c.ok(t.length >= 10, t ? 'fallback: “' + t.slice(0, 60) + '”' : 'no text inside the video'); },
      explain: 'Text between `<video>` and `</video>` is shown only by browsers that cannot play video at all.',
      fix: '<video …>\n  …\n  Your browser cannot play this video.\n</video>' },
    { text: 'An `<audio>` player with `controls` and a typed source', pts: 3,
      test: c => { const a = c.q('audio'); const s = a ? a.querySelector('source') : null; return c.ok(!!a && a.hasAttribute('controls') && !!s && s.getAttribute('src') === 'media/trailhead-radio-ep1.m4a' && /^audio\//.test(s.getAttribute('type') || ''), a ? 'audio controls ' + (a.hasAttribute('controls') ? 'yes' : 'no') + ', source ' + (s ? s.getAttribute('src') + ' (' + s.getAttribute('type') + ')' : 'none') : 'no <audio>'); },
      explain: 'An `<audio>` without `controls` is invisible. `.m4a` files hold AAC audio, whose MIME type is `audio/mp4`.',
      fix: '<audio controls>\n  <source src="media/trailhead-radio-ep1.m4a" type="audio/mp4">\n</audio>' }
  ]
},

/* =====================================================================  10 */
{
  id: 10, module: 'Module 6', topic: 'Forms and validation', edit: 'html',
  title: 'Build the Book a Class Form',
  art: 'img/cupping.png',
  story: 'Bookings arrive by phone and get lost. Build a form that collects what the baristas need, checks it in the browser, and sends it to `thanks.html`. Press the button in the preview to see exactly what your form sends.',
  steps: [
    'Add a `<form>` with `action="thanks.html"` and `method="get"`.',
    'Inside it, a `<fieldset>` with the `<legend>` **About You** holding: a **Name** text box (`id="name"`, `name="name"`, `required`) and an **Email** box (`type="email"`, `id="email"`, `name="email"`, `required`). Each needs a `<label for="…">` that matches its `id`.',
    'A **Class** `<select>` (`id="class"`, `name="class"`) with at least **three** `<option>`s that have `value`s.',
    'Two or more **radio buttons** sharing `name="level"` (for example Beginner and Home brewer). Make one `checked`.',
    'A `<textarea>` with `id="notes"` and `name="notes"`, and its label.',
    'A submit button: `<button type="submit">Book My Seat</button>`.'
  ],
  practise: ['form action / method', 'label for + id', 'name attributes', 'email, select, radio, textarea', 'required'],
  starter: {
    html: HEAD('Book a Class | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Book a Saturday coffee class</p>
  </header>
  <main>
    <h2>Book a Class</h2>
    <!-- your form goes here -->

  </main>
</body>
</html>
`,
    css: BASE_CSS + `form {
  max-width: 520px;
}
fieldset {
  border: 1px solid #E1D2BE;
  border-radius: 6px;
  background-color: white;
  margin-bottom: 14px;
}
legend {
  font-weight: bold;
  color: #96603A;
}
label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}
label.choice {
  display: inline-block;
  font-weight: normal;
  margin-right: 14px;
}
input[type="text"], input[type="email"], select, textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font: inherit;
}
button {
  font: inherit;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #00796B;
  color: white;
}
`
  },
  solution: {
    html: HEAD('Book a Class | Trailhead Coffee') + `
<body>
  <header>
    <h1>Trailhead Coffee</h1>
    <p class="tagline">Book a Saturday coffee class</p>
  </header>
  <main>
    <h2>Book a Class</h2>
    <form action="thanks.html" method="get">
      <fieldset>
        <legend>About You</legend>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </fieldset>

      <fieldset>
        <legend>Your Class</legend>
        <label for="class">Class</label>
        <select id="class" name="class">
          <option value="barista-basics">Home Barista Basics</option>
          <option value="pour-over">Pour-Over Lab</option>
          <option value="latte-art">Latte Art Workshop</option>
        </select>

        <p>Your experience:</p>
        <label class="choice"><input type="radio" name="level" value="beginner" checked> Beginner</label>
        <label class="choice"><input type="radio" name="level" value="home-brewer"> Home brewer</label>

        <label for="notes">Anything else?</label>
        <textarea id="notes" name="notes" rows="3"></textarea>
      </fieldset>

      <button type="submit">Book My Seat</button>
    </form>
  </main>
</body>
</html>
`,
    css: null
  },
  checks: [
    { text: 'The form sends to `thanks.html` with `method="get"`', pts: 2,
      test: c => { const f = c.q('form'); return c.ok(!!f && f.getAttribute('action') === 'thanks.html' && (f.getAttribute('method') || '').toLowerCase() === 'get', f ? 'action=' + f.getAttribute('action') + ', method=' + f.getAttribute('method') : 'no <form>'); },
      explain: '`action` is where the data goes; `method="get"` puts it in the address bar, so you can see it. Real bookings would use `post`.',
      fix: '<form action="thanks.html" method="get">' },
    { text: 'A `<fieldset>` with a `<legend>`', pts: 1,
      test: c => c.has('form fieldset > legend'),
      explain: 'A fieldset groups related controls; screen readers read its legend before each control inside.',
      fix: '<fieldset>\n  <legend>About You</legend>\n  …\n</fieldset>' },
    { text: 'Name and email inputs are `required`, and email uses `type="email"`', pts: 2,
      test: c => { const n = c.q('#name'), e = c.q('#email'); return c.ok(!!n && n.required && !!e && e.required && e.getAttribute('type') === 'email', 'name ' + (n ? (n.required ? 'required' : 'not required') : 'missing') + '; email ' + (e ? 'type=' + e.getAttribute('type') + (e.required ? ', required' : ', not required') : 'missing')); },
      explain: '`required` stops the form being sent while the box is empty. `type="email"` checks the address format and shows an @ keyboard on phones.',
      fix: '<input type="text" id="name" name="name" required>\n<input type="email" id="email" name="email" required>' },
    { text: 'Every label’s `for` matches an existing `id`', pts: 2,
      test: c => { const l = c.qa('label[for]'); const bad = l.filter(x => !c.doc.getElementById(x.getAttribute('for'))); const need = ['name', 'email', 'class', 'notes'].filter(id => !c.q('label[for="' + id + '"]')); return c.ok(l.length >= 4 && bad.length === 0 && need.length === 0, bad.length ? 'no element with id: ' + bad.map(x => x.getAttribute('for')).join(', ') : need.length ? 'missing a label for: ' + need.join(', ') : l.length + ' labels, all connected'); },
      explain: '`<label for="email">` points at `id="email"`. Clicking the label then focuses the box, and screen readers announce it.',
      fix: '<label for="email">Email</label>\n<input type="email" id="email" name="email" required>' },
    { text: 'A `<select>` named `class` with at least three valued options', pts: 2,
      test: c => { const s = c.q('select'); const o = s ? [...s.options].filter(x => x.getAttribute('value')) : []; return c.ok(!!s && s.getAttribute('name') === 'class' && o.length >= 3, s ? 'name=' + s.getAttribute('name') + ', ' + o.length + ' option(s) with a value' : 'no <select>'); },
      explain: 'Each `<option>` has a `value` (what is sent) and text (what the visitor reads).',
      fix: '<select id="class" name="class">\n  <option value="pour-over">Pour-Over Lab</option>\n  …\n</select>' },
    { text: 'Two or more radio buttons share `name="level"`, one checked', pts: 2,
      test: c => { const r = c.qa('input[type="radio"]'); const same = r.filter(x => x.getAttribute('name') === 'level'); return c.ok(same.length >= 2 && same.some(x => x.hasAttribute('checked')), r.length + ' radio(s); named level: ' + same.length + '; checked: ' + same.filter(x => x.hasAttribute('checked')).length); },
      explain: 'Radio buttons with the **same name** form one group, so only one can be selected. `checked` picks the default.',
      fix: '<label class="choice"><input type="radio" name="level" value="beginner" checked> Beginner</label>\n<label class="choice"><input type="radio" name="level" value="home-brewer"> Home brewer</label>' },
    { text: 'A `<textarea>` named `notes`', pts: 1,
      test: c => c.ok(!!c.q('textarea[name="notes"]'), c.has('textarea') ? 'textarea name=' + c.attr('textarea', 'name') : 'no <textarea>'),
      explain: '`<textarea>` is for several lines of text. It needs a closing tag.',
      fix: '<textarea id="notes" name="notes" rows="3"></textarea>' },
    { text: 'Every control inside the form has a `name`', pts: 2,
      test: c => { const ctl = c.qa('form input, form select, form textarea'); const bad = ctl.filter(x => !x.getAttribute('name')); return c.ok(ctl.length > 0 && bad.length === 0, bad.length ? bad.length + ' control(s) without a name' : ctl.length + ' controls, all named'); },
      explain: 'Only controls with a `name` are sent. A missing name means that answer never reaches the café.',
      fix: '<input type="text" id="name" name="name" required>' },
    { text: 'A submit button inside the form', pts: 1,
      test: c => c.ok(!!c.q('form button[type="submit"], form input[type="submit"]'), 'submit button ' + (c.q('form button[type="submit"], form input[type="submit"]') ? 'found' : 'missing')),
      explain: 'The submit button sends the form, after the browser has checked every rule.',
      fix: '<button type="submit">Book My Seat</button>' }
  ]
}
];

/* ---------- solutions that only add CSS rules to the starter ---------- */
(function fillCssSolutions() {
  const add = (id, extra) => { const a = ACTIVITIES[id - 1]; a.solution.css = a.starter.css.replace(/\n*$/, '\n') + extra; };
  ACTIVITIES[5].solution.css = ACTIVITIES[5].starter.css
    .replace('/* 1. the grid container */\n\n', '/* 1. the grid container */\n.menu {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n')
    .replace('/* 2. the title spans every column */\n\n', '/* 2. the title spans every column */\n.menu h2 {\n  grid-column: 1 / -1;\n}\n')
    .replace('/* 3. the featured drink spans two columns */\n\n', '/* 3. the featured drink spans two columns */\n.wide {\n  grid-column: span 2;\n}\n');
  ACTIVITIES[6].solution.css = ACTIVITIES[6].starter.css
    .replace('/* 1. header: logo left, nav right, centred vertically */\n\n', '/* 1. header: logo left, nav right, centred vertically */\n.site-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n')
    .replace('/* 2. nav links in a row */\n\n', '/* 2. nav links in a row */\nnav ul {\n  display: flex;\n  gap: 8px;\n  list-style: none;\n  margin: 0;\n}\n')
    .replace('/* 3. the card container */\n\n', '/* 3. the card container */\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n')
    .replace('/* 4. each card */\n\n', '/* 4. each card */\n.card {\n  flex: 1 1 200px;\n}\n');
  add(8, `@media (max-width: 600px) {
  .site-header {
    flex-direction: column;
  }
  .menu {
    grid-template-columns: 1fr;
  }
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    font-size: 1.4em;
  }
}
`);
  // files the student does not edit are the same in starter and solution
  ACTIVITIES.forEach(a => {
    if (a.solution.html == null) a.solution.html = a.starter.html;
    if (a.solution.css == null) a.solution.css = a.starter.css;
  });
})();
