import React, {Component} from 'react';

class Logout extends Component {

  handleLogout = () => {
    this.props.history.push('/logout');
  };

  render() {
    return (
      <a className="float-right" style={{cursor: 'pointer'}} onClick={this.handleLogout}>
        Log Out
      </a>
    );
  }
}

export default Logout;
