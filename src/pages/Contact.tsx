import { site } from '../data/content'

export default function Contact() {
  return (
    <div className="container page page-narrow">
      <h1>Contact</h1>

      <div className="contact-block">
        <h2>Email</h2>
        <a href={`mailto:${site.email}`} className="contact-email">
          {site.email}
        </a>
      </div>

      {(site.twitter || site.linkedin) && (
        <div className="contact-block">
          <h2>Elsewhere</h2>
          <ul className="contact-links">
            {site.twitter && (
              <li>
                <a href={site.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter / X
                </a>
              </li>
            )}
            {site.linkedin && (
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
