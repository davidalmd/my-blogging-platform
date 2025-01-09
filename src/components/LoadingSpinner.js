import React from 'react';

const LoadingSpinner = ({color = 'white'}) => {
  return <span className="loader" style={{borderTopColor: color}}></span>;
};

export default LoadingSpinner;
