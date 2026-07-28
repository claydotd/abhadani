import ReactMarkdown from 'react-markdown'
import editorialMarkdown from '../../content/editorial.md?raw'

export default function Editorial() {
    return(
        <div className="container page page-narrow">
            <h1>Editorial</h1>
            <div className="about-text">
                <ReactMarkdown>{editorialMarkdown}</ReactMarkdown>
            </div>
    </div>
    )
}