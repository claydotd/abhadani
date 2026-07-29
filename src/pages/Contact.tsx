import { site } from '../data/content'
import { findPageImage } from '../utils/pageImages'

export default function Contact() {
  const contactImage = findPageImage('contact')

  return (
    <div className="container page page-narrow">
      <h1>Contact</h1>

      {contactImage && (
        <img src={contactImage} alt="Contact" className="contact-image" />
      )}

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