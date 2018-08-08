import React, { Component } from 'react';
import Input from '../input';
import Button from '../button';
import TextArea from '../textArea';
import moment from 'moment';

export default class AddSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            no: '',
            createdAt: '',
            key: '',
            message: '',
            error:false,
            errorKey:'',
            errorMessage:'',
        };
        this.handleClickConfirmation = this.handleClickConfirmation.bind(this);
        this.handleFormOnClick = this.handleFormOnClick.bind(this);

    }
    
    handlingState(attribute, value) {
        this.setState((state, props) => {
          return {[attribute]: value};
        });
      }

    validateKey = e => (!e || /^\d+$/.test(e) ? true : false);

     handleClickConfirmation(e) {
        e.preventDefault();
    
        if (!this.state.key || !this.state.error) {
            this.handlingState('errorMessage', '')
            this.handlingState('errorKey', 'key cannot be blank');
            this.handlingState('error',true);

        }
        else if(!this.state.message || !this.state.error){
            this.handlingState('errorKey', '');
            this.handlingState('errorMessage', 'message cannot be blank')
            this.handlingState('error',true);
        }
        else {
            this.handlingState('errorKey', '');
            this.handlingState('errorMessage', '')
            this.handlingState('error',false);
            this.handleReload();
        }
      };

      handleReload() {
        return window.location.reload();
      }
      
      handleFormOnClick(e) {
      e.preventDefault();

      const dataForm = {
        no: this.state.no + 1,
        key: this.state.key,
        message: this.state.message,
        createdAt:
          this.state.startDate && this.state.endDate
            ? `${this.state.startDate.format('YYYY-MM-DD')}:${this.state.endDate.format(
                'YYYY-MM-DD',
              )}`
            : '',
      };
      this.props.handleDataForm(dataForm);
    }

    render() {
        return (
            <section className="mb-2">
              <div className="list-add">
                <form onSubmit={this.handleClickConfirmation}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className='col-md-4'>
                          <div className="add-label">
                            <span>
                              <b>Key</b>
                            </span>
                          </div>
                          <Input
                            type="string"
                            placeholder="Enter the Number Key"
                            onChange={e =>
                              this.validateKey(e.target.value) &&
                              this.handlingState('key', e.target.value)
                            }
                            value={this.state.key}
                          />
                          <p style={{color: 'red'}}>{this.state.errorKey}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="add-label">
                            <span>
                              <b>Message</b>
                            </span>
                          </div>
                          <TextArea
                            type='string'
                            placeholder="Enter the Message"
                            onChange={e => this.handlingState('message', e.target.value)}
                            value={this.state.message}
                          />
                          <p style={{color: 'red'}}>{this.state.errorMessage}</p>
                        </div>
                      </div>
                      <div className="row text-right">
                        <div className="col-md-4">
                          <Button
                            label="ADD"
                            buttonType="borderless"
                            theme="positive"
                            onClick={this.handleFormOnClick}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          );
    }
}