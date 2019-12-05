import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackPlugin from '../../src';

ReactDOM.render(
  <FeedbackPlugin postUrl="http://localhost:3000/post-feedback" />,
  document.getElementById('root'),
);
