import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <p className="agd">
          <br />
          Site built by <a href="analoguegonedigital.co.uk">analoguegonedigital.co.uk</a>
        </p>
        {site.email && (
          <a href={`mailto:${site.email}`} className="footer-link">
            {site.email}
          </a>
        )}
      </div>
    </footer>
  )
}
