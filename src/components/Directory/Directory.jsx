import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory-selectors';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

const Directory = ({ sections }) => (
  // instead of : ...({ title, imageUrl, id, size, linkUrl }), can use ES6 Spread Syntax ->
  // ...otherSectionProps
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
