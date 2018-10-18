import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter></Counter>
        </div>
      </Provider>
    );
  }
}

export default App;
