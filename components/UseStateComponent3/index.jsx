import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const UseStateComponent3 = () => {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(inputText);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          width: '80%',
        }}
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title='Send' onPress={handleSubmit} />
      {submittedText ? <Text>Entered text: {submittedText}</Text> : null}
    </View>
  );
};

export default UseStateComponent3;
