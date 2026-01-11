import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
    return (
        <div className="container animate-fade-in">
            <div style={{
                marginTop: '4rem',
                maxWidth: '700px'
            }}>
                <h1 className="title-gradient" style={{
                    fontSize: '3.5rem',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem'
                }}>
                    Minimalist space for my ideas.
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '2.5rem'
                }}>
                    Welcome to my digital garden. Here I share my notes, thoughts, and learnings about software development and technology.
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/notes" className="btn-primary" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Explore Notes <ArrowRight size={18} />
                    </Link>

                    <a href="https://github.com/sijapatisankalp-ship-it" target="_blank" rel="noreferrer" style={{
                        padding: '0.75rem 1.5rem',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        fontWeight: '600'
                    }}>
                        GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
