import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [greetingInfo, setGreetingInfo] = useState();

  const getData = async () => {
    //Multiget
    const values = await AsyncStorage.multiGet(['@count', '@greeting']);

    values.forEach((value) => {
      if (value[0] === '@count') {
        const count = parseInt(value[1]);
        setCounter(isNaN(count) ? 0 : count);
      } else if (value[0] === '@greeting') {
        setGreetingInfo(JSON.parse(value[1]));
      }
    });

    // Alternative is to call getItem for each key but better to use multiGet if getting multiple keys
    // const countValue = await AsyncStorage.getItem('@count');
    // const count = parseInt(countValue);
    // setCount(isNaN(count) ? 0 : count);
    //
    // const greetingInfo = await AsyncStorage.getItem('@greeting');
    // setCount(JSON.parse(greetingInfo));

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const incrementCounter = async () => {
    await AsyncStorage.setItem('@count', (counter + 1).toString());
    setCounter(counter + 1);
  };

  const saveGreeting = async () => {
    const greetingToSave = {
      greeting: greeting,
      name: name,
    };

    await AsyncStorage.setItem('@greeting', JSON.stringify(greetingToSave));
    setGreetingInfo(greetingToSave);
  };

  return (
    <View style={styles.container}>
      <Text>Count: {counter}</Text>
      <Button title='Increment Count' onPress={incrementCounter} />
      <View style={styles.divider} />
      <Text>Saved Greeting:</Text>
      {greetingInfo ? (
        <Text>
          {greetingInfo.greeting} {greetingInfo.name}
        </Text>
      ) : (
        <Text>None :(</Text>
      )}
      <TextInput
        style={styles.input}
        onChangeText={setGreeting}
        placeholder='Greeting'
        value={greeting}
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder='Name'
        value={name}
      />
      <Button title='Save Greeting' onPress={saveGreeting} />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    padding: 8,
  },
  input: {
    height: 20,
    marginVertical: 8,
    marginHorizontal: 30,
    alignSelf: 'stretch',
    borderBottomColor: '#00aa77',
    borderBottomWidth: 2,
  },
});

export default AsyncStorageExample2;
