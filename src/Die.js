import React, { Component } from 'react';
import './Die.css';

class Die extends Component {

    render() {
        return (
            <i className = { `Die fas fa-10x fa-dice-${this.props.id} ${this.props.isRolling && 'Die-wobble'}` }/>
        );
    }
}

export default Die;