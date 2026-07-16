import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../data/content'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Selected Work' },
  { to: '/copywriting', label: 'Copywriting' },
  { to: '/editorial', label: 'Editorial' },
  // { to: '/photography', label: 'Photography' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on resize back to desktop width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 560) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="site-title" onClick={() => setIsOpen(false)}>
          <span className="site-name">{site.name}</span>
          <span className="site-tagline">{site.tagline}</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>

        <nav
          className={isOpen ? 'nav is-open' : 'nav'}
          id="site-nav"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}