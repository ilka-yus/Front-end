import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Ленивый импорт комаонентов
const Dashboard = lazy(() => import ('./pages/Dashboard'));
const Settings = lazy(() => import ('./pages/Settings'));
const Profile = lazy(() => import ('./pages/Profile'));

// Индикатор загрузки
function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div className='spinner'></div>
      <p>Loading page...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/profile'>Profile</Link>
      </nav>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;