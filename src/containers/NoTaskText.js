import React from 'react';
import { Spinner } from 'react-mdl';

const NoTaskText = () => (
  <div className="notask-text">
    <span>NO TASK AVAILABLE</span>
    <Spinner />
  </div>
);

export default NoTaskText;