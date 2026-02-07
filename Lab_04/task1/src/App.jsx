import React from 'react';
import RegistrationForm  from './RegistrationForm';
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <RegistrationForm />
    </div>
  );
}

export default App;
