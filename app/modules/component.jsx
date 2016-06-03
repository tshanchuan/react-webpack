import React from 'react';
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, sdf<input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});



export default HelloWorld;