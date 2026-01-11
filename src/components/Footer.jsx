const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 0',
            marginTop: 'auto',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
