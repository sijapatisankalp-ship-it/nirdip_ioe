import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'

const NoteDetail = () => {
    const { slug } = useParams()

    // Need to import again to find the specific one. 
    // In production with thousands of notes this approach isn't scalable (bundle size), 
    // but for a personal site it's the simplest "serverless" way.
    const modules = import.meta.glob('../notes/*.md', { eager: true, query: '?raw', import: 'default' })

    const notePath = `../notes/${slug}.md`
    const content = modules[notePath]

    if (!content) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <h1>Note not found</h1>
                <Link to="/notes" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                    Back to Notes
                </Link>
            </div>
        )
    }

    return (
        <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
            <Link to="/notes" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                <ArrowLeft size={16} /> Back to Notes
            </Link>

            <article className="markdown-content">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem' }} {...props} />,
                        p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem', color: '#d4d4d8' }} {...props} />,
                        ul: ({ node, ...props }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }} {...props} />,
                        li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                        code: ({ node, inline, className, children, ...props }) => {
                            return inline ? (
                                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9em' }} {...props}>
                                    {children}
                                </code>
                            ) : (
                                <pre style={{ background: '#18181b', padding: '1.5rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                                    <code style={{ fontFamily: 'monospace' }} {...props}>{children}</code>
                                </pre>
                            )
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    )
}

export default NoteDetail
