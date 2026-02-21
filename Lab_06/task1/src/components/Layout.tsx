import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div style={{ padding: '20px' }}>
            <nav style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <Link to='/'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/about'>About</Link>
            </nav>

            <main style={{ minHeight: '300px', padding: '20px 0' }}>
                <Outlet />
            </main>

            <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
                Student Portal 2026
            </footer>
        </div>
    );
}