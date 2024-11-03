import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

import { validateEmail, validatePassword } from '../../tools/formValidation';

const MyFormComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError('Email format is incorrect');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (!validatePassword(text)) {
      setPasswordError('The password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      alert('Check the form for errors');
      return;
    }
    // Логика отправки данных формы
    alert('The form has been sent');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder='Enter email'
      />
      {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder='Enter password'
        secureTextEntry={true}    // символы вместо введеных знаков
      />
      {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <View style={styles.button}>
        <Button onPress={handleSubmit} title='Send' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});

export default MyFormComponent;
