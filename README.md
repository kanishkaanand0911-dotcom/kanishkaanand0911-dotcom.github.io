# Kanishka Anand: Personal Portfolio

Live site: https://kanishkaanand0911-dotcom.github.io

A hand-coded personal portfolio for Kanishka Anand, MBA Tech (Data Science) student at NMIMS.
Plain HTML, CSS and JavaScript. No framework, no build step, no template.

## What's in it

- **Hero**: split layout with an abstract histogram-and-bell-curve portrait and a small terminal that types out on load.
- **About**: short bio beside a four-circle diagram (Data, AI, Business, Creativity).
- **Experience**: Adani Green PVC / Mundra Petrochem case study with an interactive report-page illustration.
- **Projects**: Vybe Learn (live), plus Crowd Movement Simulation (a small agent-based simulation you can re-run in the browser), Driver Drowsiness Detection and Global Superstore analysis.
- **Toolkit, Education, Leadership, Contact.**

The dashboard, eye-landmark and histogram graphics are original illustrations drawn for this site.
They show how the work is structured and contain no real company data.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

```
index.html      page structure and content
style.css       design tokens, layout, responsive rules
script.js       menu, typed terminal, report tabs, crowd simulation
assets/         fonts and the Vybe Learn screenshot
```

## Credits

- **Fonts**: [Space Grotesk](https://github.com/floriankarsten/space-grotesk) and [Inter](https://github.com/rsms/inter), both under the SIL Open Font License 1.1, self-hosted from the [Fontsource](https://fontsource.org) packages `@fontsource-variable/space-grotesk` and `@fontsource-variable/inter`.
- **Vybe Learn screenshot**: a capture of my own project at https://vybelearn.vercel.app.
- **Illustrations**: hand-written inline SVG, no stock images.
- **AI assistance**: I used Claude (Anthropic) as a coding assistant to help write and debug the HTML, CSS and JavaScript. The content, projects and design direction are mine.
