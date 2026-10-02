import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-muted'}`

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to the top on page change, or to the anchor when the URL has one
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="border-b border-line bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Daniel Strandheim
          </Link>
          <div className="flex gap-6">
            <NavLink to="/" end className={navLinkClass}>
              Projects
            </NavLink>
            <Link to="/#about" className="text-sm font-medium text-muted transition-colors hover:text-accent">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} Daniel Strandheim</p>
          <div className="flex gap-4">
            <a href="https://github.com/Daniel-leiken" target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/daniel-strandheim" target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
