import ReactMarkdown from 'react-markdown'
import etcMarkdown from '../../content/etc.md?raw'

export default function Etc() {
  return (
    <div className="container page page-narrow">
      <h1>Etc</h1>
      <div className="about-text">
        <ReactMarkdown>{etcMarkdown}</ReactMarkdown>
      </div>
    </div>
  )
}
