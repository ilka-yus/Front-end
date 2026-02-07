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
    }}>
      <RegistrationForm />
    </div>
  );
}

export default App;
