import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

function ExpensiveComponent({ num }) {
  const computeExpensive = (number) => {
    console.log('Calculations are in progress...');
    return number * 99999999999999; // Suppose that this is a heavy computational operation
  };

  const result = useMemo(() => computeExpensive(num), [num]);
  return <Text>Result: {result}</Text>;
}

const UseMemoComponent = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={{ display: 'flex', alignSelf: 'center' }}>
      <ExpensiveComponent num={number} />
      <Button
        title='Збільшити число'
        onPress={() => setNumber(number * 999999999999)}
      />
    </View>
  );
};

export default UseMemoComponent;
