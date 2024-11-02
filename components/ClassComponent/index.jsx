import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isTextVisible: !prevState.isTextVisible,
    }));
  };

  render() {
    return (
      <View>
        {this.state.isTextVisible && (
          <Text style={{ textAlign: 'center' }}>Show text</Text>
        )}
        <Button title='Toggle visibility' onPress={this.toggleVisibility} />
      </View>
    );
  }
}

export default ClassComponent;
