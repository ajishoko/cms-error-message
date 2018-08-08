import React, { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    sessionStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Logging out</p>
      </div>
    );
  }
}
