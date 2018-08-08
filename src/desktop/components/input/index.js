import React, { Component } from 'react';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state={ showPassword: false };
    }
    
    togglePassword = (e) => {
        e.preventDefault();
        this.setState({ showPassword: !this.state.showPassword });
    };

    inputType = () => {
        if (this.props.type !== 'password') return this.props.type;
        if (this.state.showPassword) return 'text';
        return 'password';
      };

    render() {
        return(
            <div className={`input-text-wrapper ${this.props.hidden && 'hidden'}`}>
                {this.props.icon && <i className="material-icons">{this.props.icon}</i>}
                <div>
                    <input
                        {...this.props}
                        type={this.inputType()}
                        placeholder={this.props.placeholder || this.props.label}
                        className={this.props.theme}
                        maxLength={this.props.maxLength}
                    />
                    {this.props.label && <label className="input" htmlFor={this.props.name}>{this.props.label}</label>}
                </div>
                {this.props.type === 'password' && (
                <i className="material-icons visibility" onClick={this.togglePassword} role="button">
                    {this.state.showPassword ? 'visibility_off' : 'visibility'}
                </i>
                )}
            </div>
        );
    }
}