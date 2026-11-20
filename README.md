# ARC Website

Source code for **[arc.elsherbeni.com](https://arc.elsherbeni.com)**, the website of the ARC Research Group (Antennas, RFID & Computational EM) at the Colorado School of Mines, directed by Dr. Atef Elsherbeni.

The site is a small, static website built with [Astro](https://astro.build). It shows the group's research areas, current and past members, news, a gallery, the Viceroy Fellowship info, and a publications page. There is no database and no server: everything is generated from files in this repository.

If you have just inherited this project, start with **Quick Start** below. Most updates (adding a member, posting news) only require editing one TypeScript file.

---

## Quick Start

### 1. Install

You need:

- [Node.js](https://nodejs.org) (v20 or newer; the LTS version is a good choice). This also installs `npm`.
- [Git](https://git-scm.com)
- A code editor. [VS Code](https://code.visualstudio.com) with the official *Astro* extension works well.

Then, in a terminal:

```bash
git clone <repository-url>
cd ARC-Website
npm install
```

`npm install` only needs to be run once (and again if `package.json` changes).

### 2. Run it locally

```bash
npm run dev
```

Open the address it prints (normally <http://localhost:4321>). The page reloads automatically every time you save a file, so you can see your changes immediately. Press `Ctrl + C` in the terminal to stop the server.

**Always test your changes with `npm run dev` before publishing them.** If you make a typo in a data file, the terminal and the browser will show an error pointing at the problem line.

### 3. Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server with live reload |
| `npm run build` | Builds the final static site into `dist/` (also a good check that nothing is broken) |
| `npm run preview` | Serves the built `dist/` folder locally, to see exactly what will be deployed |

---

## The Two Most Common Changes

Updating **members** and updating the **news** can be done entirely by editing TypeScript files in `src/data/`. You do not need to touch any HTML or CSS.

### Updating members: `src/data/people.ts`

Every person on the site is one entry in the `people` array. The file is grouped into commented blocks (Faculty, Current PhD, Current MS, Current Undergrad, then the Past groups).

#### Add a new member

1. Put their photo in `public/Media_1/portraits/`.
2. Copy an existing entry in `src/data/people.ts` and edit it:

```ts
{
  id: "smith",                                   // unique, lowercase, no spaces
  name: "Jane Smith",
  photo: "/Media_1/portraits/jsmith.jpg",        // path starts at /public (don't write "public")
  researchInterests: "Antenna design and RFID systems.",
  linkedin: "https://www.linkedin.com/in/janesmith/",
  projects: [
    { title: "My Poster Title", href: "/Media_1/research/jane_poster.pdf" },
  ],
  sections: ["undergrad"],
},
```

3. Save and check it in the browser (`npm run dev`).

#### Fields

| Field | Required | Notes |
| --- | --- | --- |
| `id` | yes | Must be unique across all entries |
| `name` | yes | Shown on the card |
| `photo` | yes | Path relative to `public/`, starting with `/` |
| `sections` | yes | Which group(s) the person appears in (see below) |
| `role` | no | e.g. `"Director"`, `"Co-Director"` (used for faculty) |
| `researchInterests` | no | Short text blurb |
| `linkedin`, `email`, `website`, `github` | no | Full URLs (`email` is just the address) |
| `projects` | no | List of `{ title, href }` links, usually PDFs of posters, papers, or slides |

Optional fields can simply be left out.

#### Sections

`sections` controls where a person is displayed. Valid values:

`"faculty"`, `"phd"`, `"ms"`, `"undergrad"`, `"past-faculty"`, `"past-phd"`, `"past-ms"`, `"past-undergrad"`

A person can have more than one. For example, someone who is a current PhD student and was previously an undergraduate in the group uses `sections: ["phd", "past-undergrad"]`.

#### Common edits

- **Someone graduates or leaves:** change their section to the matching `past-` one (e.g. `["ms"]` becomes `["past-ms"]`). Keep any earlier `past-` entries they already have.
- **Someone moves up (undergrad to MS):** replace `"undergrad"` with `"ms"` and add `"past-undergrad"`.
- **Order on the page** is the order of entries in the file, so move an entry up or down to reorder it.
- **Hero stats:** the "19+ Members / 55+ Projects / 50+ Publications / 150+ Meetings" numbers at the top of the homepage are typed by hand in `src/pages/index.astro` (search for `hero__stats`). They do not update automatically.

### Updating news: `src/data/news.ts`

Every news post is one entry in the `newsItems` array, in blocks grouped by year (`// ── 2026 ──`).

#### Add a news item

Add a new entry at the **top of the current year's block** so the newest item shows first:

```ts
{
  id: "example-award-2026",          // unique, lowercase, no spaces
  date: "November 2026",             // display text, any format you like
  year: 2026,                        // number; this controls which group it appears in
  headline: "Jane Smith Wins Best Poster at Symposium",
  body: "Short description of what happened.",
  images: [
    { src: "/Media_1/pictures/jane_poster.jpg", alt: "Jane Smith with her poster" },
  ],
  links: [
    { title: "Poster PDF", href: "/Media_1/research/jane_poster.pdf" },
  ],
},
```

Only `id`, `date`, `year`, `headline`, and `body` are required. `images`, `links`, and `videos` are optional.

#### Fields

| Field | Notes |
| --- | --- |
| `images` | List of `{ src, alt }`. Optional extras: `aspectRatio` (e.g. `"3 / 4"`) and `objectPosition` (e.g. `"60% 20%"`) to control cropping. Image files go in `public/Media_1/pictures/` or `public/Media_1/news_awards/`. |
| `links` | List of `{ title, href }`. `href` is optional (a title with no link is allowed). |
| `videos` | List of `{ src, title }`. Use the YouTube **embed** URL, e.g. `https://www.youtube.com/embed/VIDEO_ID`. |

#### Tips

- **Quotes inside text:** if `body` is wrapped in `"double quotes"`, write inner quotes as `\"`. For long, multi-paragraph text, wrap the body in backticks (`` ` ``) instead, which allows line breaks and quotes freely.
- **New year:** just add an item with the new `year`. The page automatically shows the newest year in full and puts all older years into collapsible **Archive** sections. You never need to edit the page itself.
- **Order within a year** is the order in the file, so keep newest at the top.

---

## How Astro Works (the short version)

Astro turns the files in `src/` into plain HTML, CSS, and a little JavaScript at build time. There is no server running the site: the output is a folder of static files (`dist/`) that can be hosted anywhere.

A few concepts are all you need:

- **`.astro` files** are components and pages. Each has two parts: an optional block at the top between `---` fences that runs TypeScript/JavaScript (imports, loading data), and below it, HTML that can embed values with `{curly braces}`.

  ```astro
  ---
  import { getPeople } from "../data/people";
  const faculty = getPeople("faculty");
  ---
  <h2>Faculty</h2>
  {faculty.map(person => <p>{person.name}</p>)}
  ```

- **Pages = files in `src/pages/`.** `src/pages/index.astro` is the homepage (`/`), `src/pages/publications.astro` is `/publications`. Adding a new `.astro` file there creates a new URL automatically.
- **Layouts** wrap pages in the shared outer structure (head tags, navigation, footer). Pages use `<Layout> ... </Layout>`.
- **Components** are reusable pieces (like a person card) that you place inside pages: `<PersonCard person={p} />`.
- **Data lives in `.ts` files.** This site keeps its content in `src/data/*.ts` and the pages loop over that data to render it. That is why updating people and news doesn't require touching any HTML.
- **Scoped styles.** A `<style>` block inside an `.astro` file only applies to that file. Site-wide styles live in `src/styles/global.css`.
- **`public/` is served as-is.** Anything in `public/` is available at the site root: `public/Media_1/pictures/lab4.jpg` becomes `/Media_1/pictures/lab4.jpg`. This is why image and PDF paths in the data files start with `/` and never include `public`.

Astro docs: <https://docs.astro.build>

---

## Project Structure

```text
ARC-Website/
├── astro.config.mjs        Astro configuration
├── package.json            Project dependencies and npm scripts
├── tsconfig.json           TypeScript settings
├── public/                 Static files served as-is (images, PDFs, favicons)
│   ├── favicon.ico / .png / .svg
│   ├── Media_1/            Portraits, news pictures, research PDFs, gallery images
│   ├── Projects/           Student poster/presentation PDFs (GRADS, UGRADS)
│   └── Software/           Downloadable software pages and files
└── src/
    ├── data/               Site content as TypeScript  (edit these most often)
    │   ├── people.ts       All members and which section they appear in
    │   └── news.ts         All news posts, grouped by year
    ├── pages/              One file per URL
    │   ├── index.astro     Homepage: hero, research areas, team, Viceroy
    │   │                   Fellowship, news, gallery, contact
    │   └── publications.astro   The /publications page
    ├── components/         Reusable building blocks
    │   ├── PeopleSection.astro  A titled grid of people for one section
    │   ├── PersonCard.astro     A single member card
    │   └── NewsItem.astro       A single news post
    ├── layouts/
    │   └── Layout.astro    Shared page wrapper (head, nav, footer)
    └── styles/
        └── global.css      Site-wide styles (colors, fonts, buttons, etc.)
```

Not tracked in git / not meant to be edited: `node_modules/` (installed packages) and `dist/` (build output, created by `npm run build`).

### Where is the content for each section of the homepage?

All of it is in `src/pages/index.astro`, in this order:

| Section | Where it comes from |
| --- | --- |
| Hero + stats | Hand-written HTML in `index.astro` |
| Research Areas | Hand-written cards in `index.astro` (copy an existing `research-card` block to add one) |
| Meet the Team | `src/data/people.ts` |
| Viceroy Fellowship | Hand-written in `index.astro` (update the **Upcoming Deadlines** each cycle) |
| News | `src/data/news.ts` |
| Gallery | A list of `<img>` tags in `index.astro` |
| Software | Currently commented out in `index.astro` |
| Contact | Hand-written in `index.astro` (address, office, email) |

---

## Troubleshooting

- **Image or PDF doesn't show up:** check the path. It must start with `/`, must not include `public`, and is case-sensitive (`.JPG` is not `.jpg`). Make sure the file is actually inside `public/`.
- **A link works on the dev server but not on the live site:** make sure it begins with `/` (for example `/Media_1/research/file.pdf`, not `Media_1/research/file.pdf`), otherwise it is resolved relative to the current page.
- **Spaces in file names:** they work, but filenames without spaces are safer and easier to maintain.
- **The page is blank or shows an error overlay:** read the message in the terminal running `npm run dev`. It almost always names the file and line. The usual causes are a missing comma, a missing closing `}` or `]`, or an unescaped `"` inside a string in `people.ts` or `news.ts`.
- **A person doesn't appear:** check that `sections` contains a valid value (see the list above) and that the entry is inside the `people` array.
- **`npm run dev` fails right after cloning:** run `npm install` first, and confirm your Node.js version with `node -v`.

---

## Deploying

Running `npm run build` produces the finished site in `dist/`. Publishing that to **arc.elsherbeni.com** is done by:

> _TODO: document how the site is currently hosted and published (host/provider, who has access, how DNS for `arc.elsherbeni.com` is managed, and whether pushes to `main` deploy automatically)._

---

## Contact

Site maintained for the ARC Research Group, Colorado School of Mines, Brown Hall, 1610 Illinois St., Golden, CO 80401.
Group director: Dr. Atef Elsherbeni, <aelsherb@mines.edu>
