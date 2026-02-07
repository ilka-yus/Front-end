import React from 'react';
import ArticleManager  from './ArticleManager';
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <header style={{ borderBottom: '2px solid #333', marginBottom: '20px' }}>
        <h1>Article Management System</h1>
      </header>
      <ArticleManager />
    </div>
  );
}

export default App;
