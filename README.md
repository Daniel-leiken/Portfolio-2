# Portfolio 2 – Daniel Strandheim

![Portfolio home page](public/images/portfolio-preview.webp)

My personal front-end portfolio, built for the Noroff Portfolio 2 course assignment. It features three projects, each with its own article page.

**Live site:** _coming soon_

## Description

The portfolio is a multipage React app with a home page and one article page per project.

- **Home page** with an introduction, teaser cards for each project (thumbnail, title, short description and a "Read more" link) and an About me section
- **Article pages** with the project title, short description, a share/copy link button, a screenshot with caption, links to the live site and the GitHub README (both open in a new tab) and a longer description
- Responsive layout from mobile to desktop
- All images are optimised webp files under 200 KB

## Built with

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) for the multipage routing
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vite](https://vite.dev/)
- Deployed on [Netlify](https://www.netlify.com/)

## Featured projects

| Project | Course | Live | Repo |
| --- | --- | --- | --- |
| BidBound | Semester Project 2 | [Live](https://bidbound-semester-project2.netlify.app) | [GitHub](https://github.com/Daniel-leiken/Semester-Project-2) |
| ShopHub | JavaScript Frameworks | [Live](https://javascript-frameworks-ca-daniel.netlify.app) | [GitHub](https://github.com/Daniel-leiken/javascript-frameworks-ca) |
| ChatterHub | CSS Frameworks | [Live](https://css-frameworks-danielleiken.netlify.app) | [GitHub](https://github.com/Daniel-leiken/css-frameworks-ca-danielstrandheim) |

## Getting started

### Installing

1. Clone the repo:

   ```bash
   git clone https://github.com/Daniel-leiken/Portfolio-2.git
   cd Portfolio-2
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running

Start the development server:

```bash
npm run dev
```

Then open http://localhost:5173. Build for production with `npm run build`. The output goes to `dist/`.

## Project structure

```
src/
  components/   Layout, ProjectCard, ShareButton
  data/         projects.js – content for the teaser cards and article pages
  pages/        Home, Project (article page), NotFound
public/
  images/       Optimised webp screenshots (all under 200 KB)
  _redirects    Netlify rule so article URLs work on refresh
```

To add or edit a project, update `src/data/projects.js`.

## Contributing

This is a school project, so I'm not looking for code contributions. If you find a bug or have a suggestion, feel free to [open an issue](https://github.com/Daniel-leiken/Portfolio-2/issues). Pull requests are welcome too: fork the repo, create a branch for your change and open a pull request so the change can be reviewed.

## Contact

- [GitHub](https://github.com/Daniel-leiken)
- [LinkedIn](https://www.linkedin.com/in/daniel-strandheim)
