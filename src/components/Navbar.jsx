import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Home } from 'lucide-react'

const Navbar = () => {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <nav style={{
            borderBottom: '1px solid var(--border)',
            background: 'rgba(5, 5, 5, 0.8)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '70px'
            }}>
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span className="title-gradient">Portfolio.</span>
                </Link>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <NavLink to="/" icon={<Home size={18} />} label="Home" active={isActive('/')} />
                    <NavLink to="/notes" icon={<BookOpen size={18} />} label="Notes" active={isActive('/notes')} />
                </div>
            </div>
        </nav>
    )
}

const NavLink = ({ to, icon, label, active }) => (
    <Link to={to} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: active ? '600' : '400',
        transition: 'all 0.2s'
    }}>
        {icon}
        <span>{label}</span>
    </Link>
)

export default Navbar
