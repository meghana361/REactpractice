import React, { useEffect, useState } from 'react';

const Randomcolor = () => {
  const [typeofcolor, setTypeofcolor] = useState('hex');
  const [color, setColor] = useState('#000000');

  // Random number generator function for hex and RGB
  const RandomNumberGenerator = (len) => Math.floor(Math.random() * len);

  // Unified function to generate random color based on current type
  const GenerateRandomColor = () => {
    if (typeofcolor === 'hex') {
      const hex = '0123456789ABCDEF';
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
        hexColor += hex[RandomNumberGenerator(hex.length)];
      }
      setColor(hexColor);
    } else if (typeofcolor === 'rgb') {
      const r = RandomNumberGenerator(256);
      const g = RandomNumberGenerator(256);
      const b = RandomNumberGenerator(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };

  // useEffect to handle initial color generation on type change
  useEffect(() => {
    GenerateRandomColor();
  }, [typeofcolor]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: color }}>
      <button onClick={() => setTypeofcolor('hex')}>Create Hex</button>
      <button onClick={() => setTypeofcolor('rgb')}>Create RGB</button>
      <button onClick={GenerateRandomColor}>
        Create {typeofcolor === 'hex' ? 'Hex' : 'RGB'} Random Color
      </button>
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <h3>{typeofcolor.toUpperCase()} Color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Randomcolor;
