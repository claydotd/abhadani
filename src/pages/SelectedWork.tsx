import { Link } from 'react-router-dom'
import WorkCard from '../components/WorkCard'
import { getFeaturedItems } from '../data/content'


export default function SelectedWork() {
  const featured = getFeaturedItems()

  return (
    <div className="container page page-home">
      <section >
              {featured.length > 0 && (
        <div className="work-grid">
            {featured.map((item) => (
              <WorkCard
                key={`${item.category}-${item.title}`}
                item={item}
                category={item.category}
                showCategory
              />
            ))}
          </div>
                )}
      </section>
      <section className="section right">
            <Link to="/all-work" className="button">
          See more of my work here
        </Link>
        </section>
    </div>
  )
}
