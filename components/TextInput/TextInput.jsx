import { View, TextInput } from 'react-native';
import { useState } from 'react';

import styles from './TextInput.style';

const MyTextInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
        placeholder='Enter the text'
      />
    </View>
  );
};

export default MyTextInput;
