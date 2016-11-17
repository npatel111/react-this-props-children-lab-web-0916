const app = "I don't do much.";
// const React = require('react');

import React from 'react';
import ReactDOM from 'react-dom';

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    );
  }
}

module.exports= Invitation;
