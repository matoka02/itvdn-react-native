import { SafeAreaView, View, Text } from 'react-native';

import AsyncStorageComponent from './components/AsyncStorageComponent';
import AsyncStorageExample1 from './components/AsyncStorageExample1';
import AsyncStorageExample2 from './components/AsyncStorageExample2';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 17</Text>
        {/* <AsyncStorageComponent /> */}
        {/* <AsyncStorageExample1 /> */}
        <AsyncStorageExample2 />
      </View>
    </SafeAreaView>
  );
}
