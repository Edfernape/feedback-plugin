import React from 'react';
import ReactDOM from 'react-dom';
// import Demo from './Demo';
import FeedbackPlugin from '../../src';

ReactDOM.render(
  <FeedbackPlugin postUrl="http://localhost:3001/post-feedback" />,
  document.getElementById('root'),
);
