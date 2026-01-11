import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'

const Notes = () => {
    // Eagerly load all markdown files from the notes directory
    const modules = import.meta.glob('../notes/*.md', { eager: true, query: '?raw', import: 'default' })

    const notes = Object.keys(modules).map((path) => {
        const slug = path.split('/').pop().replace('.md', '')
        const content = modules[path]

        // Extract title from first line # Title
        const titleMatch = content.match(/^# (.*)/)
        const title = titleMatch ? titleMatch[1] : slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

        // Simple excerpt (first non-heading line)
        const excerpt = content
            .split('\n')
            .find(line => line.trim() !== '' && !line.startsWith('#'))
            ?.slice(0, 150) + '...' || 'No preview available.'

        return {
            slug,
            title,
            excerpt,
            path
        }
    })

    return (
        <div className="container animate-fade-in">
            <h1 style={{ marginBottom: '2rem' }}>Notes</h1>

            {notes.length === 0 ? (
                <p style={{ color: 'var(--text-secondary)' }}>No notes found yet. Add a markdown file to the notes folder!</p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {notes.map((note) => (
                        <Link key={note.slug} to={`/notes/${note.slug}`} className="glass-panel" style={{
                            display: 'block',
                            padding: '1.5rem',
                            transition: 'transform 0.2s, border-color 0.2s',
                            height: '100%'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem',
                                color: 'var(--accent)'
                            }}>
                                <FileText size={20} />
                                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Note</span>
                            </div>

                            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{note.title}</h2>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                {note.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Notes
