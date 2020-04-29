import React from 'react';

import './CustomButton.scss';

// otherProps in this case: type='submit'
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
