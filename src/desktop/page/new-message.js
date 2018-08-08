import React, {Component} from 'react';
import Input from '../components/input';
import Button from '../components/button';
import Drawer from '../components/drawer';
import TextArea from '../components/textArea';
import Logout from '../components/logout';
import Modal from '../components/modal';

import 'react-datepicker/dist/react-datepicker.css';

/*
* @author: Yudistira Ramadhan (yudhistira.ramadhan@kudo.co.id)
*
*/
export default class NewMessage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          drawer: true,
          key: '',
          message: '',
          formUploading: false,
          formSubmitError: false,
          formSubmitErrorMessage: '',
        };

        this.handleClickConfirmation = this.handleClickConfirmation.bind(this);
      }
    
      handlingState(attribute, value) {
        this.setState((state, props) => {
          return {[attribute]: value};
        });
      }

      validateKey = e => (!e || /^\d+$/.test(e) ? true : false);
    
      handleClickConfirmation = async e => {
        e.preventDefault();
    
        if (!this.state.key) {
            this.handlingState('formSubmitError', true);
            this.handlingState('formSubmitErrorMessage', 'key cannot be blank');
            return false;
        }
        else if(!this.state.message){
            this.handlingState('formSubmitError', true);
            this.handlingState('formSubmitErrorMessage', 'message cannot be blank');
            return false;
        }
        else if (this.state.formUploading) {
          return false;
        } else {
          this.handlingState('formUploading', true);
        }

        this.onFormSubmitted();
      };
    
      onFormSubmitted = () => {
        this.handlingState('key', '');
        this.handlingState('message', '');
        this.handlingState('formUploading', false);
        this.handlingState('formSubmitError', true);
        this.handlingState('formSubmitErrorMessage', 'Message Saved');
        this.handleReload();
      };

      handleReload() {
        return window.location.reload();
      }
    
      render() {
    
        return (
          <div className="page-wrapper page-new-message">
            {/* Modal Wrapper */}
            <Modal
              content={this.state.formSubmitErrorMessage}
              show={this.state.formSubmitError}
              onClick={() => {
                this.handlingState('formSubmitError', false);
                this.handlingState('formSubmitErrorMessage', '');
                this.handlingState('formUploading', false);
              }}
            />
    
            <aside className={`page-aside ${this.state.drawer ? 'active' : ''}`}>
              <Drawer select={2} />
            </aside>
            <section className="page-main">
              <section className="page-header">
                <h3>
                  <i
                    className="material-icons active"
                    onClick={e => this.handlingState('drawer', this.state.drawer ? false : true)}
                  >
                    menu
                  </i>
                  <img src={'./images/kudo-logo.png'} alt="Kudo" height="20px" className="mr-2" />
                  <b>Error Config</b>
                  <Logout {...this.props} />
                </h3>
              </section>
              <section className="page-title">
                <h1>Add New Message</h1>
                <small className="breadcrumb">
                  Home /
                  <b> Add New Message </b>
                </small>
              </section>
              <section className="page-body">
    
                <section>
                  <div className="row">
                    <div className="col-10">
                      <form onSubmit={this.handleClickConfirmation}>

                        <div className="row">
                          <div className="col-2">
                            <div className="add-label">
                              <span className="form-label">Key</span>
                            </div>
                          </div>
                          <div className="col">
                            <Input
                              type="string"
                              placeholder="Enter the Number Key"
                              onChange={e =>
                                this.validateKey(e.target.value) &&
                                this.handlingState('key', e.target.value)
                              }
                              value={this.state.key}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-2">
                            <div className="add-label">
                              <span className="form-label">Message</span>
                            </div>
                          </div>
                          <div className="col">
                            <TextArea
                              placeholder="Enter the Message"
                              onChange={e => this.handlingState('message', e.target.value)}
                              value={this.state.message}
                            />
                          </div>
                        </div>
    
                        <div className="row text-right">
                          <div className="col">
                            <Button
                              label={this.state.formUploading ? 'Saving Message' : 'SAVE'}
                              buttonType="borderless"
                              theme="primary"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </div>
        );
      }
    }
    