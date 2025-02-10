import React, { useState } from 'react';

const RandomVerse: React.FC = () => {
  const [verse, setVerse] = useState<string>('');

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch(
        `https://labs.bible.org/api/?passage=random&type=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        setVerse(
          `${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`
        );
      } else {
        setVerse('No verse found.');
      }
    } catch (error) {
      console.error('Error fetching random verse:', error);
      setVerse('Failed to fetch verse. Try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Random Bible Verse</h2>
      <button onClick={fetchRandomVerse} style={buttonStyle}>
        Get Random Verse
      </button>
      {verse && <p style={verseStyle}>{verse}</p>}
    </div>
  );
};

// ✅ Fix: Explicitly define styles with React.CSSProperties
const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  margin: '20px auto',
  maxWidth: '500px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

const verseStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '20px',
  color: '#444',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '5px',
};

export default RandomVerse;
