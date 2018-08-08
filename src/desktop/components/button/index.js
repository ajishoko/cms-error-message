import React, { Component } from 'react';

export default class Button extends Component{
    /**
    * class variables
    */
    buttonTheme = this.props.theme ? ` btn-${this.props.theme}` : '';
    buttonType = this.props.type ? ` btn-${this.props.type}` : '';
    buttonBlock = this.props.fullWidth ? ` btn-block` : '';
    buttonClass = `btn${this.buttonTheme}${this.buttonType}${this.buttonBlock}`;

    render() {
        /**
        * return Button either as <button> or as <a> link
        */
        const buttonComponent = this.props.link ? (
            <a className={this.buttonClass} href={this.props.link.href}>
            {this.props.label}
            </a>
        ) : (
            <button className={this.buttonClass} onClick={this.props.onClick}>{this.props.label}</button>
        );

        return buttonComponent;
    }
}