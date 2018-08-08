import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.select || 0,
      handleList: false,
    };
  }

  //JSON belum tersedia jadi pake dummy dulu
  getUserEmail = () => {
    return 'dummy';
  };

  handlingState(attribute, value) {
    this.setState((state, props) => {
      return {[attribute]: value};
    });
  }

  handlingList(attribute, value) {
    this.handlingState('select', 0);
    this.setState((state, props) => {
      return {[attribute]: value};
    });
  }

  render() {
    return (
      <div className="side-drawer">
        <div className="side-drawer-content">
          <ul className="side-drawer-menu">
            <li>
              <div className="side-drawer-user">
                <div className="mb-4">
                  <span className="avatar avatar-large" title="Default Tooltip">
                    <img
                      src="https://static.kudo.co.id/shop/src/img/icons/ic_profile_picture.svg"
                      alt="default tooltip"
                    />
                  </span>
                </div>
                <div className="popmenu">
                  <p>{this.getUserEmail()}</p>
                </div>
              </div>
            </li>

            <li className="side-drawer-list">
              <ul>
                <li
                  className={this.state.select === 1 ? 'active' : ''}
                  onClick={e => this.handlingState('select', 1)}
                >
                  <Link to="/message" className="side-drawer-link">
                    <i className="material-icons side-drawer-link-icon">info</i>
                    <span>Message</span>
                  </Link>
                </li>

                <li
                  className={this.state.select === 2 ? 'active' : ''}
                  onClick={e => this.handlingState('select', 2)}
                >
                  <Link to="/new-message" className="side-drawer-link">
                    <i className="material-icons side-drawer-link-icon">info</i>
                    <span>Add New Message</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
