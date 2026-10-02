import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Home() {
  useEffect(() => {
    document.title = 'Daniel Strandheim | Front-end developer'
  }, [])

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Front-end developer</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm Daniel. I build websites that are fast, accessible and easy to use.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          I'm a WordPress developer studying Front-end Development at Noroff. Here are some of my recent projects.
        </p>
      </section>

      <section aria-labelledby="projects-heading" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <h2 id="projects-heading" className="mb-6 text-2xl font-bold">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 border-t border-line bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 py-16 sm:flex-row sm:px-6">
          <img
            src="/images/portrait.webp"
            alt="Portrait of Daniel Strandheim"
            width="160"
            height="160"
            className="h-40 w-40 shrink-0 rounded-full object-cover"
          />
          <div>
            <h2 id="about-heading" className="text-2xl font-bold">
              About me
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Hi, I'm Daniel Strandheim, a web developer who enjoys building dynamic, user-friendly websites. I've
              worked as a WordPress developer since 2018, and alongside that I'm studying Front-end Development at
              Noroff. I like using modern tools such as React, Next.js and Tailwind CSS to build projects that solve
              real problems. When I'm not coding, I'm usually working out or playing video games.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/Daniel-leiken"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink/80"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-strandheim"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-4 py-2 text-sm font-semibold transition hover:border-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
