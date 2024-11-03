import { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample1 = () => {
  const [inputText, setInputText] = useState('');
  const [storedText, setStoredText] = useState('');

  // Функция сохранения текста
  const storeText = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', inputText);
      setInputText('');
      alert('Text saved!');
    } catch (e) {
      alert('Error saving text!');
    }
  };

  // Функция для получения сохраненного текста
  const retrieveText = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        setStoredText(value);
      } else {
        alert('No text saved');
      }
    } catch (e) {
      alert('Error extracting text');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
        placeholder='Enter text here'
      />
      <Button title='Save text' onPress={storeText} />
      <Button title='Get saved text' onPress={retrieveText} />
      {storedText ? (
        <Text style={styles.storedText}>Saved text {storedText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  storedText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default AsyncStorageExample1;
