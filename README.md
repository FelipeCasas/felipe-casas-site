# Luis Felipe Casas Murillo

Personal academic site for GitHub Pages. Jekyll builds it. Content lives in `_data/` as YAML, so a new paper is one entry in `_data/publications.yml` and a new project is one entry in `_data/projects.yml` plus a short stub.

## Pages

Home, About, Research, Projects (15 project pages), Publications, Experience, News and talks, CV.

## Edit content

| Change | File |
| --- | --- |
| Name, navigation, email, Scholar, LinkedIn, CV path, portrait, bio | `_data/profile.yml` |
| A paper, its links, or its BibTeX | `_data/publications.yml` |
| A project | `_data/projects.yml` |
| Education | `_data/education.yml` |
| Jobs | `_data/experience.yml` |
| Volunteer roles | `_data/service.yml` |
| News | `_data/news.yml` |
| Talks | `_data/talks.yml` |
| Skills | `_data/skills.yml` |
| Honors | `_data/honors.yml` |
| Research groups | `_data/groups.yml` |

Adding a project:

1. Add an entry to `_data/projects.yml`. Set `slug`, and set `local_video: ""` until a file exists.
2. Create `_projects/<slug>.md` with only:

```yaml
---
slug: your-slug
---
```

3. Put figures in `assets/images/opt/` and list them on the entry.
4. For a local video, save `assets/videos/<slug>.mp4` and set `local_video` to `/assets/videos/<slug>.mp4`.

Paper and code links use `status: ok` with a `url`, `status: todo` (renders as “Paper: coming soon” or “Code: coming soon”), or `status: na` (“not applicable”). Every project page also reserves a video slot.

Originals downloaded from the previous Wix site are in `assets/images/wix/`. Pages use the resized files in `assets/images/opt/`.

## Build locally

```bash
gem install jekyll
jekyll serve
```

The site is served under the `baseurl` in `_config.yml` (`/felipe-casas-site`). Open `http://127.0.0.1:4000/felipe-casas-site/`.

After `jekyll build`, `python3 script/check_links.py _site` checks internal links.

## Enable GitHub Pages after this is merged

Do this in the GitHub repository settings. This pull request does not change those settings and does not publish the site.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set the branch to `main` and the folder to **`/ (root)`**.
4. Save. GitHub Pages runs Jekyll on the repository. Do not add a `.nojekyll` file.
5. The site will be at `https://felipecasas.github.io/felipe-casas-site/`.
6. If you later move the site to `https://felipecasas.github.io/` (a user site) or a custom domain at the root, set `baseurl` in `_config.yml` to `""` and update the Sitemap line in `robots.txt`.

## Placeholders

Search the data files for `TODO`. The visible ones are:

- Email address (two candidates; phone number is omitted on purpose)
- Google Scholar URL, and ORCID
- Portrait photo (`assets/images/portrait-candidate.jpg` is unconfirmed)
- LinkedIn canonical URL
- Ph.D. start date (CV: Aug. 2023; previous site: Sep. 2023)
- M.Sc. end date (CV: November 2022; previous site: Dec. 2022)
- CV PDF path (`assets/cv/Luis-Felipe-Casas-CV.pdf`)
- Persona AI internship dates, location, and bullets
- RoboPapers episode 97 direct URL
- Missing paper or code links, marked “coming soon”, on Ale-HAND-Ra, Frontier Mining, renal analysis, the digital-twin thesis, vertical farms, the wildfire thesis, and the CAM project
- Whether Frontier Mining can be described in public
- A local video file on every project (`assets/videos/<slug>.mp4`)
- Ale-HAND-Ra figures and a longer role note
