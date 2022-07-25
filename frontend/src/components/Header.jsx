import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <p className='logo'>Cocktails on draft</p>
        <p>Welcome on our site QWERTY!</p>
        <div className='nav-container'>
          <Link to='/' >Home</Link>
          <Link to='/gallery' >Gallery</Link>
          <Link to='/favourites' >Favourites</Link>
        </div>
    </header>
  )
}

export default Header