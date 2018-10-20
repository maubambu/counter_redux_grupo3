import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import { Provider } from 'react-redux';
import store from './state/stores/Store';

class App extends Component {
  state = {
    number: 1
  }


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
