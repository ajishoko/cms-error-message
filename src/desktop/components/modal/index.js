import React, {Component} from 'react';

import Button from '../button';

export default class Modal extends Component {
  // constructor(props){
  //   super(props);
  // }

  renderModal = () => {
    if (this.props.show) {
      return (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              borderRadius: '2px',
              width: '300px',
              padding: '15px',
              backgroundColor: '#FFFFFF',
              position: 'relative',
            }}
          >
            <p>{this.props.content}</p>

            <footer
              style={{
                bottom: '15px',
                textAlign: 'right',
                width: '100%',
              }}
            >
              <Button label="tutup" theme="primary" onClick={this.props.onClick} />
            </footer>
          </div>
        </div>
      );
    } else {
      return false;
    }
  };

  render() {
    return this.renderModal();
  }
}
