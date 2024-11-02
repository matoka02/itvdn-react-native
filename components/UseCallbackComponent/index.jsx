import { useState, useEffect, useCallback } from 'react';
import { View, Button, Text } from 'react-native';

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState(0);
  const [functionRenderCount, setFunctionRenderCount] = useState(0);

  const handlePress = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // Another function that modifies another state
  const handleAnotherButtonPress = () => {
    setAnotherState(anotherState + 1);
  };

  useEffect(() => {
    setFunctionRenderCount(functionRenderCount + 1);
  }, [handlePress]);

  return (
    <View style={{ display: 'flex', alignSelf: 'center' }}>
      <Button title='Increase count' onPress={handlePress} />
      <Text style={{ paddingVertical: 30 }}>
        Number of clicks (count): {count}
      </Text>

      <Button title='Increase Another State' onPress={handleAnotherButtonPress} />
      <Text style={{ paddingTop: 30 }}>
        Value of another state: {anotherState}
      </Text>

      <Text>
        HandlePress function render count: {functionRenderCount}
      </Text>
    </View>
  );
};

export default UseCallbackComponent;
