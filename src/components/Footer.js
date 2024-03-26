import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      position: 'absolute', 
      left: '-10px',
      bottom: '100px',
      padding: '1rem',
      textAlign: 'left' 
    }}>
      © {new Date().getFullYear()} Company Name. All rights reserved.
    </footer>
  );
}
