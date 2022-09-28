import React from 'react';
import PropTypes from 'prop-types';

// рендерит секцию с заголовком и детей (children)
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
