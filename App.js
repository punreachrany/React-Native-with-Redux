import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Counter from './screens/Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      console.log('Enter INCREASE_COUNTER reducer');
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      console.log('Enter DECREASE_COUNTER reducer');
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// };

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
