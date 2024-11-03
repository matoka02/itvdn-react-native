import { SafeAreaView, View, Text } from 'react-native';

import AnimatedComponent from './components/AnimatedComponent';
import PanResponderComponent from './components/PanResponderComponent';
import ReanimatedComponent from './components/ReanimatedComponent';

import styles from './App.styles';


export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 14</Text>
          {/* <AnimatedComponent /> */}
          {/* <ReanimatedComponent /> */}
          <PanResponderComponent />
      </View>
    </SafeAreaView>
  );
}
