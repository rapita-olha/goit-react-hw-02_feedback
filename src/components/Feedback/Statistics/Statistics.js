import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  // const Statistics = props => (
  <div>
    <ul className="statistics_list">
      <li className="statistics_item">Good: {good}</li>
      <li className="statistics_item">Neutral: {neutral}</li>
      <li className="statistics_item">Bad: {bad}</li>
      <li className="statistics_item">Total: {total}</li>
      <li className="statistics_item">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
