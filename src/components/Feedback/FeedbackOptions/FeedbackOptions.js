import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className="feedback_list">
      {options.map(option => (
        <li key={option} className="feedback_item">
          <button type="submit" className="btn" onClick={onLeaveFeedback}>
            {/* {option.charAt(0).toUpperCase() + option.slice(1)} */}
            {option[0].toUpperCase() + option.slice(1)}

            {/* 
        //option - имя одного state`a
        //для key не использовать index, только id
        <li key={`button-${option.name}`} className="feedback_item">
          <button
            type="submit"
            className="btn"
            onClick={onLeaveFeedback}
            name={option.name}
          >
            {option.label}
            */}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
