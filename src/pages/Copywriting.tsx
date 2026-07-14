import WorkCard from '../components/WorkCard'
import { getCopywritingItems } from '../data/content'
import { CopywritingBlurb } from '../../content/blurbs.tsx'

export default function Copywriting() {
    const items = getCopywritingItems()
    
    return(
        <div className="container page">
            <h1>Copywriting</h1>
            <CopywritingBlurb />
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