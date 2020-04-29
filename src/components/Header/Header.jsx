import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

/* This is a _special syntax_ in React for importing SVG
    [ReactComponent] import name tells create-react-app that you 
    want a React component that renders SVG rather than its filename. 
    more info: https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
*/
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
