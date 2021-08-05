import React, { Component } from 'react';
import './components.scss';

class Button extends Component {
    render () {
        return (
            <div className='button-component'>
            <button
            className={this.props.class}   
            onClick={this.props.onClick}         
            >{this.props.title}
            </button>
            </div>
        )
    }
}

export default Button;