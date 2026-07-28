import ReactMarkdown from 'react-markdown'
import aboutMarkdown from '../../content/about.md?raw'
import { Link } from 'react-router-dom'

export default function About() {

  return (
    <div className="container page page-narrow">
      <div className="about-text">
          <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
      </div>
      <section className="section right">
            <Link to="/contact" className="button">
          Work with me
        </Link>
        </section>
    </div>
  )
}
