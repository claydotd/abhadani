import { Link } from 'react-router-dom'
import WorkCard from '../components/WorkCard'
import { categories } from '../data/content'

export default function SelectedWork() {
  const sections = categories
    .map((category) => ({
      label: category.label,
      items: category.items.filter((item) => item.featured),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <div className="container page page-work">
      <div className="selected-work-layout">
        <header className="selected-work-title">
          <h1>Selected Work</h1>
        </header>

        <div className="selected-work-main">
          {sections.map((section) => (
            <section key={section.label} className="work-category-section">
              <h2 className="work-category-heading">{section.label}</h2>
              <div className="work-grid">
                {section.items.map((item) => (
                  <WorkCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          ))}

          <section className="section right">
            <Link to="/all-work" className="button">
              See more of my work here
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
