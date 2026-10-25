# Trailhead Code Lab

Ten hands-on HTML and CSS activities for **CSIS 1280 (Web Design), Modules 1–6**, built around the
fictional Trailhead Coffee Roasters website used in the course case studies.

**Live app:** https://rezaghaeli.github.io/csis-1280-code-lab/

| # | Module | Students write | Topic |
|---|--------|----------------|-------|
| 1 | 1 | HTML | Semantic page structure |
| 2 | 1 | HTML | Lists, links, images, quotes |
| 3 | 2 | CSS | Selectors, colour, type |
| 4 | 2 | CSS | Box model, units, list styling |
| 5 | 3 | CSS | Float and clear |
| 6 | 4 | CSS | CSS Grid |
| 7 | 5 | CSS | Flexbox |
| 8 | 5 | CSS | Responsive design, media queries |
| 9 | 6 | HTML | Video, audio, captions |
| 10 | 6 | HTML | Forms and validation |

## How it works

- Each activity gives a short story, numbered steps, an illustration, and starter code. Students edit either
  the HTML or the CSS (the other file is given and read-only) and see a live preview, with a **Goal** view and
  a **Phone** view.
- **Submit** renders the code in hidden desktop (960px) and phone (400px) frames and runs weighted checks
  against the real DOM, computed styles, and CSS rules. The report lists every mistake with what was found,
  why it matters, and the correct code, plus a line-by-line comparison with the proper code and both pages
  side by side.
- Submitting an activity unlocks the next one. After Activity 10 the results page shows the score for each
  activity and an approximate overall percentage. Students can redo activities and start new runs as often as
  they like; earlier runs are kept in a history.
- Progress is stored in the browser (`localStorage`); nothing is sent to a server.

## Files

- `index.html`, `css/app.css`, `js/app.js`: the app (no build step).
- `js/activities.js`: the ten activities: steps, starter and solution code, and checks.
- `js/checker.js`: renders and grades code.
- `thanks.html`: receives the Activity 10 form and lists the submitted name/value pairs.
- `img/`, `media/`: Trailhead illustrations and the roastery tour video, captions, and podcast
  (original, made for the course).

To add or change an activity, edit `js/activities.js`. Each check is
`{ text, pts, test(c), explain, fix }`, where `test` returns `true`/`false` or `c.ok(pass, foundText)`.
