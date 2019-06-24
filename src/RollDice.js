import React, { Component } from 'react';
import './RollDice.css'
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        id: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        };
        this.roll = this.roll.bind(this);
    }

    roll() {
        const newDie1 = this.props.id[
            Math.floor(Math.random() * this.props.id.length)
        ], newDie2 = this.props.id[
            Math.floor(Math.random() * this.props.id.length)
        ];
        this.setState({ die1: newDie1, die2: newDie2, isRolling: true });
        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000);
    }

    render() {
        return (
            <div className='RollDice'>
                <Die id={this.state.die1} isRolling={this.state.isRolling} />
                <Die id={this.state.die2} isRolling={this.state.isRolling} />
                <button className='RollDice-btn'
                        onClick={this.roll}
                        disabled={this.state.isRolling}
                >
                    { this.state.isRolling ? 'Rolling...' : 'Roll Dice' }
                </button>
            </div>
        );
    }

}

export default RollDice;