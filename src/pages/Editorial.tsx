import WorkCard from '../components/WorkCard'
import { getEditorialItems } from '../data/content'
import { EditorialBlurb } from '../../content/blurbs.tsx'

export default function Editorial() {
    const items = getEditorialItems()
    return(
        <div className="container page">
            <h1>Editorial</h1>
            <EditorialBlurb />
            <div className="work-grid">
                {items.map((item) => (
                <WorkCard
                    key={`${item.title}`}
                    item={item}
                />
                ))}
            </div>
        </div>
    )
}