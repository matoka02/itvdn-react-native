import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const TextInputComponent = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

const LiftingStateComponent = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Entered value: {textValue}</Text>
      <TextInputComponent value={textValue} onChangeText={setTextValue} />
      <TextInputComponent value={textValue} onChangeText={setTextValue} />
    </View>
  );
};

export default LiftingStateComponent;
