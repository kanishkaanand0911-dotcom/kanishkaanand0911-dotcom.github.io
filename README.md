# Kanishka Anand: Personal Portfolio

Live site: https://kanishkaanand0911-dotcom.github.io

A hand-coded personal portfolio for Kanishka Anand, MBA Tech (Data Science) student at NMIMS and Bharatanatyam dancer.
The design mixes the two worlds: cobalt and a data grid for data science, gold, maroon and a temple-arch motif for dance.
Plain HTML, CSS and JavaScript. No framework, no build step, no template.

## What's in it

- **Hero**: two temple arches (an office portrait and a Bharatanatyam pose) inside a slowly turning gold mandala, with a small terminal that types out on load.
- **About**: short bio, with the things I do outside work as small icon pills, beside a four-circle diagram (Data, AI, Business, Creativity).
- **Two languages, one rhythm**: Bharatanatyam and data side by side. An eight-beat Adi tala drawn as a histogram, five dance-to-data pairings (tala, adavu, mudra, abhinaya, sadhana) and photos from stage and from work.
- **Experience**: Adani Green PVC / Mundra Petrochem case study with an interactive report-page illustration.
- **Projects**: Vybe Learn (live; began as a hackathon project and is being grown on AWS), plus Crowd Movement Simulation (a small agent-based simulation you can re-run in the browser), Driver Drowsiness Detection and Global Superstore analysis.
- **Toolkit, Education, Leadership (with my Arangetram), Contact.**

The dashboard, eye-landmark and histogram graphics are original illustrations drawn for this site.
They show how the work is structured and contain no real company data.

## Swapping photos

All photos live in `assets/`. To change one, upload a new file with the same name (GitHub: Add file, Upload files) and it replaces the old one.

| File | Where it shows |
| --- | --- |
| `kanishka-lobby.webp` | Hero, main arch |
| `kanishka-dance-pose.webp` | Hero, small arch |
| `kanishka-stage.webp` | "On stage" arch in the rhythm section |
| `kanishka-adani-crop.webp` | "At work" arch in the rhythm section |
| `kanishka-early.webp` | "Where it started" polaroid |
| `kanishka-adani.webp` | Experience section, orientation month photo |

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

```
index.html      page structure and content
style.css       design tokens, layout, responsive rules
script.js       menu, typed terminal, report tabs, crowd simulation, scroll effects, tala
assets/         fonts, images and the Vybe Learn screenshot
```

## Credits

- **Fonts**: [Space Grotesk](https://github.com/floriankarsten/space-grotesk), [Inter](https://github.com/rsms/inter) and [Fraunces](https://github.com/undercasetype/Fraunces), all under the SIL Open Font License 1.1, self-hosted from the [Fontsource](https://fontsource.org) packages `@fontsource-variable/space-grotesk`, `@fontsource-variable/inter` and `@fontsource-variable/fraunces`.
- **Images**: the collages, illustrations and photos in `assets/` are mine or were chosen and supplied by me. The `kanishka-*.webp` files are my own photographs. The illustrative collages (`data-*`, `dance-*`, `story-meeting.webp`) are decoration only; their interface badges were cropped out and the ghungroo anklet was cut out from its grey background.
- **Vybe Learn screenshot**: a capture of my own project at https://vybelearn.vercel.app.
- **Illustrations**: the charts, diagrams and mandala are hand-written inline SVG.
- **AI assistance**: I used Claude (Anthropic) as a coding assistant to help write and debug the HTML, CSS and JavaScript. The content, projects and design direction are mine.
