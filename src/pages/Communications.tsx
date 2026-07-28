import ReactMarkdown from 'react-markdown'
import communicationsMarkdown from '../../content/communications.md?raw'

export default function Communications() {
    
    return(
        <div className="container page page-narrow">
            <h1>Communications</h1>
            <div className="about-text">
                <ReactMarkdown>{communicationsMarkdown}</ReactMarkdown>
            </div>
        </div>
    )
}