import ReactMarkdown from 'react-markdown'
import aboutMarkdown from '../../content/about.md?raw'
import { Link } from 'react-router-dom'
import { site } from '../data/content'
import { findPageImage } from '../utils/pageImages'

export default function About() {
  const aboutImage = findPageImage('about')

  return (
    <div className="container page about-page">
      <div className="about-layout">
        <header className="about-brand">
          <h1>{site.name}</h1>
          <h3 className="about-tagline">{site.tagline}</h3>
          <h3 className="about-bio">{site.bio}</h3>
        </header>

        <div className="about-image">
          {aboutImage && (
            <img src={aboutImage} alt={site.name} className="about-page-image" />
          )}
        </div>

        <div className="about-text">
          <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
        </div>
      </div>
      <section className="right">
            <Link to="/contact" className="button">
              Work with me
            </Link>
        </section>
    </div>
  )
}
