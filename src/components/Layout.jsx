import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem 0' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
