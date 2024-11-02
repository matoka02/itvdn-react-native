import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

import ButtonComponent from '../ButtonComponent';

const KeyboardAvoidingViewComponent = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [skill, setSkill] = useState('');
  const [profession, setProfession] = useState('');

  const showValues = () => {
    if (name && age && email && skill && profession) {
      alert('Data is ' + name + ' ' + age + ' ' + email + ' ' + skill + ' ' + profession);
      setName('');
      setAge('');
      setEmail('');
      setSkill('');
      setProfession('');
    } else {
      alert('Please fill all the fields');
    }
  }
  
  return (
    <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
      {/*<View style={styles.container}>*/}
      <SafeAreaView style={styles.innerContainer}>
        <Text style={styles.titleText}>
          Keyboard Avoiding View
        </Text>
        <TextInput
          placeholder='Enter Name'
          value={name}
          onChangeText={(data) => setName(data)}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder='Enter Age'
          value={age}
          onChangeText={(data) => setAge(data)}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder='Enter Email'
          value={email}
          onChangeText={(data) => setEmail(data)}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder='Enter Skill'
          value={skill}
          onChangeText={(data) => setSkill(data)}
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder='Enter Profession'
          value={profession}
          onChangeText={(data) => setProfession(data)}
          style={styles.textInputStyle}
        />
        <ButtonComponent onPressHandler={showValues}
          buttonStyle={styles.buttonStyle}
          name='SHOW' />
      </SafeAreaView>
      {/*</View>*/}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lavender'
  },
  innerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'midnightblue',
    marginBottom: 20
  },
  buttonStyle: {
    backgroundColor: 'midnightblue',
    padding: 10,
    minWidth: 250,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
export default KeyboardAvoidingViewComponent;