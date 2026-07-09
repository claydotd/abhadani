import type { PortfolioItem } from '../types'

interface WorkCardProps {
  item: PortfolioItem
  category?: string
  showCategory?: boolean
  showImage?: boolean
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function WorkCard({
  item,
  category,
  showCategory = false,
  showImage = true,
}: WorkCardProps) {
  const content = (
    <>
      {showImage && item.imageUrl && (
        <div className="work-card-image">
          <img src={item.imageUrl} alt="" loading="lazy" />
        </div>
      )}
      <div className="work-card-body">
        {showCategory && category && (
          <span className="work-card-category">{category}</span>
        )}
        <h3 className="work-card-title">{item.title}</h3>
        <p className="work-card-meta">
          <span>{item.publisher}</span>
          <span className="meta-sep" aria-hidden="true">
            &middot;
          </span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        {item.quote && <blockquote className="work-card-quote">{item.quote}</blockquote>}
      </div>
    </>
  )
  if (item.url) {
    return (
      <article className="work-card">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-card-link"
        >
          {content}
        </a>
      </article>
    )
  }
  return <article className="work-card">{content}</article>
}