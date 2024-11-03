import { SafeAreaView, View, Text } from 'react-native';

import FetchComponent from './components/FetchComponent';
import AxiosComponent from './components/AxiosComponent';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 16</Text>
        {/* <FetchComponent /> */}
        <AxiosComponent />
      </View>
    </SafeAreaView>
  );
}
