import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
          <div className="loading-page">
            <div className="loading-content">
              <img src="https://static.kudo.co.id/shop/src/img/ring.gif" alt="Spinner"/>
              <p>Loading please wait ...</p>
            </div>
          </div>
        );
    }
}

export default Loading;
