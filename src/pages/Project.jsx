import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShareButton from '../components/ShareButton.jsx'
import { getProject } from '../data/projects.js'
import NotFound from './NotFound.jsx'

export default function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} | Daniel Strandheim`
  }, [project])

  if (!project) return <NotFound />

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link to="/" className="text-sm font-medium text-muted hover:text-accent">
        &larr; All projects
      </Link>

      <header className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{project.course}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.teaser}</p>
        <div className="mt-6">
          <ShareButton title={project.title} />
        </div>
      </header>

      <figure className="mt-10">
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1200"
          height="750"
          className="w-full rounded-xl border border-line shadow-sm"
        />
        <figcaption className="mt-3 text-center text-sm text-muted">{project.caption}</figcaption>
      </figure>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
        >
          View live site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-ink"
        >
          GitHub README
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <section aria-labelledby="about-project" className="mt-12">
        <h2 id="about-project" className="text-2xl font-bold">
          About the project
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold">Built with</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
