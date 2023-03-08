import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/images/lab.png"
      {...props}
      height="50"
      className='roundLogo'
    />
  );
};

export default Logo;
