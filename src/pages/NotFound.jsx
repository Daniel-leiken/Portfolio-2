import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 inline-block font-semibold text-accent hover:underline">
        Back to the projects
      </Link>
    </section>
  )
}
