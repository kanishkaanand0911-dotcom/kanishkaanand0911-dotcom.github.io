# Kanishka Anand: Personal Portfolio

Live site: https://kanishkaanand0911-dotcom.github.io

A short, hand-coded portfolio for Kanishka Anand, MBA Tech (Data Science) student at NMIMS and Bharatanatyam dancer.
Plain HTML, CSS and JavaScript. No framework, no build step, no template.

## What's in it

- **Hero**: name, one-line intro and two arches, one for data and one for dance.
- **Internship**: Data & Analytics Intern at Adani Green PVC / Mundra Petrochem, with the three reporting areas I worked on.
- **Vybe Learn**: my AI tutor for data science, with a link to the live site.
- **More projects**: crowd simulation, driver drowsiness detection, Global Superstore analysis.
- **Data and dance**: an eight-beat Adi tala drawn as a histogram, and how tala, adavu and abhinaya map to data work.
- **About and Contact.**

The design uses one palette throughout: night, gold and maroon, with cobalt for data.

## Swapping photos

All photos live in `assets/`. Upload a new file with the same name (GitHub: Add file, Upload files) to replace one.

| File | Where it shows |
| --- | --- |
| `kanishka-lobby.webp` | Hero, "Data" arch |
| `kanishka-dance-pose.webp` | Hero, "Dance" arch |
| `kanishka-adani.webp` | Internship section |
| `kanishka-stage.webp` | Data and dance section |
| `vybe-learn-preview.webp` | Vybe Learn screenshot |

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

```
index.html      page structure and content
style.css       design tokens, layout, responsive rules
script.js       menu, scroll effects, tala animation
assets/         fonts and images
```

## Credits

- **Fonts**: [Space Grotesk](https://github.com/floriankarsten/space-grotesk) and [Inter](https://github.com/rsms/inter), both under the SIL Open Font License 1.1, self-hosted from the [Fontsource](https://fontsource.org) packages `@fontsource-variable/space-grotesk` and `@fontsource-variable/inter`.
- **Photos**: the `kanishka-*.webp` files are my own photographs.
- **Vybe Learn screenshot**: a capture of my own project at https://vybelearn.vercel.app.
- **Mandala and tala graphics**: hand-written inline SVG and CSS.
- **AI assistance**: I used Claude (Anthropic) as a coding assistant to help write and debug the HTML, CSS and JavaScript. The content, projects and design direction are mine.
