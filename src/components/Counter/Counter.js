import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        count: state.count,
        stepValue: state.stepValue
    };
}

class Counter extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT'});
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    handleInputChange = (e) => {
        this.props.dispatch({ type: 'INPUT_CHANGE', stepValue: parseInt(e.target.value) })
    }
    
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <input onChange={(e)=>this.handleInputChange(e)} value={this.props.stepValue} type="number"></input>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
    
}


export default connect(mapStateToProps)(Counter)