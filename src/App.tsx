import React from 'react';
import RandomVerse from './components/RandomVerse';
import SpecificVerse from './components/SpecificVerse';

const App: React.FC = () => {
  return (
    <div style={appContainerStyle}>
      <h1 style={titleStyle}>Bible Verse Fetcher</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
};

const appContainerStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '30px',
  backgroundColor: '#E3F2FD',
  minHeight: '100vh',
};

const titleStyle: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
};

export default App;
