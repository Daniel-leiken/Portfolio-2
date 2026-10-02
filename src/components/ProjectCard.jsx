import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={project.image}
        alt=""
        width="1200"
        height="750"
        loading="lazy"
        className="aspect-[16/10] w-full border-b border-line object-cover object-top"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{project.course}</p>
        <h3 className="mt-1 text-xl font-bold">
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.teaser}</p>
        <span className="mt-4 text-sm font-semibold text-accent group-hover:underline" aria-hidden="true">
          Read more &rarr;
        </span>
      </div>
    </article>
  )
}
