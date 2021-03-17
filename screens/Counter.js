import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

// const Counter = props => {
//   const [counter, setCounter] = useState(0);

//   const increaseCounter = () => {
//     setCounter(counter + 1);
//   };
//   const decreateCounter = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.counterPart}>
//         <TouchableOpacity onPress={increaseCounter}>
//           <Text style={styles.text}>Increase</Text>
//         </TouchableOpacity>
//         <Text style={styles.text}>{counter}</Text>
//         <TouchableOpacity onPress={decreateCounter}>
//           <Text style={styles.text}>Decrease</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

class Counter extends Component {
  state = {counter: 0};

  // increaseCounter = () => {
  //   this.setState({counter: this.state.counter + 1});
  // };
  // decreaseCounter = () => {
  //   this.setState({counter: this.state.counter - 1});
  // };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterPart}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.text}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  counterPart: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
