import { useState } from 'react';
import { View, Button, Text } from 'react-native';

const UseStateComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Number of clicks: {count}</Text>
      <Button title='Press me' onPress={increment} />
    </View>
  );
};

export default UseStateComponent;
