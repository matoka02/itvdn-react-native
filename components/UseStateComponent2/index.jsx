import { useState } from 'react';
import { View, Button, Text } from 'react-native';

const UseStateComponent2 = () => {
  const [textVisible, setTextVisible] = useState(true);

  const toggleText = () => {
    setTextVisible(!textVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {textVisible && <Text>Show this text</Text>}
      <Button
        title={textVisible ? 'Hide text' : 'Show text'}
        onPress={toggleText}
      />
    </View>
  );
};

export default UseStateComponent2;
