import React from 'react';


const Header = () => {
  return (
    <header style={{ 
      backgroundImage: `url('src/components/pic.jpg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '500px', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white' 
    }}>
      <h1>This is the Header </h1>
    </header>
  );
};

export default Header;