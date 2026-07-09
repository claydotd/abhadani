import { NavLink } from 'react-router-dom'
import { site } from '../data/content'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Selected Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="site-title">
          <span className="site-name">{site.name}</span>
          <span className="site-tagline">{site.tagline}</span>
        </NavLink>
        <nav className="nav" aria-label="Main navigation">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
