# Kanishka Anand: Personal Portfolio

Live site: https://kanishkaanand0911-dotcom.github.io

A hand-coded personal portfolio for Kanishka Anand, MBA Tech (Data Science) student at NMIMS and Bharatanatyam dancer.
The design mixes the two worlds: cobalt and a data grid for data science, gold, maroon and a temple-arch motif for dance.
Plain HTML, CSS and JavaScript. No framework, no build step, no template.

## What's in it

- **Hero**: a temple arch holding a data-science collage, a slowly turning gold mandala, a ghungroo anklet and a small terminal that types out on load.
- **About**: short bio, with the things I do outside work as small icon pills, beside a four-circle diagram (Data, AI, Business, Creativity).
- **Two languages, one rhythm**: Bharatanatyam and data side by side. An eight-beat Adi tala drawn as a histogram, five dance-to-data pairings (tala, adavu, mudra, abhinaya, sadhana) and two mood boards.
- **Experience**: Adani Green PVC / Mundra Petrochem case study with an interactive report-page illustration.
- **Projects**: Vybe Learn (live; began as a hackathon project and is being grown on AWS), plus Crowd Movement Simulation (a small agent-based simulation you can re-run in the browser), Driver Drowsiness Detection and Global Superstore analysis.
- **Toolkit, Education, Leadership (with my Arangetram), Contact.**

The dashboard, eye-landmark and histogram graphics are original illustrations drawn for this site.
They show how the work is structured and contain no real company data.

## Add your own photos

Four spots are ready for personal photos. Each shows a supplied image until you add a file with the exact name below to the `assets/` folder (GitHub: Add file, Upload files). Nothing else needs editing.

| File name | Where it shows |
| --- | --- |
| `assets/kanishka-cutout.png` | Transparent cut-out of me inside the hero arch |
| `assets/kanishka-dance.jpg` | On top of the "On stage" board |
| `assets/kanishka-work.jpg` | On top of the "On screen" board |
| `assets/kanishka-about.jpg` | In the arch beside the toolkit |

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
- **Images**: the collages, illustrations and photos in `assets/` (`data-*.webp`, `dance-*`, `story-meeting.webp`) were chosen and supplied by me. They are used as decoration only; the interface badges were cropped out and the ghungroo anklet was cut out from its grey background.
- **Vybe Learn screenshot**: a capture of my own project at https://vybelearn.vercel.app.
- **Illustrations**: the charts, diagrams and mandala are hand-written inline SVG.
- **AI assistance**: I used Claude (Anthropic) as a coding assistant to help write and debug the HTML, CSS and JavaScript. The content, projects and design direction are mine.
