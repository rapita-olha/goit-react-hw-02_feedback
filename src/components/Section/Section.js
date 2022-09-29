import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className="title">
    {title}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
