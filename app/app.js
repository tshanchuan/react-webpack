import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './modules/component.jsx';

// setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
// }, 10000);
