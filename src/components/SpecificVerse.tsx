import React, { useState } from 'react';

const SpecificVerse: React.FC = () => {
  const [verse, setVerse] = useState<string>('');
  const [input, setInput] = useState<string>('John 3:16');

  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch(
        `https://labs.bible.org/api/?passage=${input}&type=json`
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
      console.error('Error fetching specific verse:', error);
      setVerse('Failed to fetch verse. Try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Get a Specific Bible Verse</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter verse (e.g., John 3:16)"
        style={inputStyle}
      />
      <button onClick={fetchSpecificVerse} style={buttonStyle}>
        Fetch Verse
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

const inputStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  marginTop: '10px',
  width: '80%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#28A745',
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

export default SpecificVerse;
