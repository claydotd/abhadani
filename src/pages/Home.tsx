import { Link } from 'react-router-dom'
// import WorkCard from '../components/WorkCard'
import { site } from '../data/content'
// import { getFeaturedItems } from '../data/content'
//import page background image


export default function Home() {
  // const featured = getFeaturedItems()

  return (
    <div className="container page page-home">
      <section className="hero">
        <div className="hero-info"><h1>{site.name}</h1>
        <p className="hero-bio">{site.bio}</p>
        <div className="social-grid">
          <div className="social-link">
            <a href={site.twitter} target="_blank" rel="noopener noreferrer">
            <div className="social-icon"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
            </div>
            </a>
          </div>

          <div className="social-link">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="social-icon"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.049c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
                  </svg>
            </div>
            </a>
          </div>

          <div className="social-link">
          <a href={site.email} target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            </a>
          </div>
        </div>
        
        </div>
              {/* {featured.length > 0 && ( */}
        {/* <div className="work-grid">
            {featured.map((item) => (
              <WorkCard
                key={`${item.category}-${item.title}`}
                item={item}
                category={item.category}
                showCategory
              />
            ))}
          </div> */}
                {/* )} */}
      </section>


        <section className="section right">
            <Link to="/contact" className="button">
          Work with me
        </Link>
        </section>
    </div>
  )
}
