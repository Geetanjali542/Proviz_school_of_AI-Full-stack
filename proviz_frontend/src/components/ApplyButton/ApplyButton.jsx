import React from 'react';
import './ApplyButton.css';


const ApplyButton = ({ onClick }) => (
  <button onClick={onClick} className="apply-button">
    Apply Now
  </button>
);

export default ApplyButton;
