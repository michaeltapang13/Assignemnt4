import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" style={{ height: '100px' }} />
        <div>Company Name</div>
      </div>
      <nav style={{ display: 'flex', width: '100%' }}>
        <Link to="/" style={{ flex: 1, textAlign: 'left' }}>Home</Link>
        <Link to="/products" style={{ flex: 1, textAlign: 'center'}}>Products</Link>
        <Link to="/login" style={{ flex: 1, textAlign: 'right'}}>Login</Link>
      </nav>
    </header>
  );
}


