import { SafeAreaView, View, Text } from 'react-native';

import ExampleComponent1 from './components/ExampleComponent1';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import LiftingStateComponent from './components/LiftingStateComponent';
import ReverseDataFlowComponent from './components/ReverseDataFlowComponent';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 10</Text>

        {/* <ExampleComponent1 /> */}

        {/* <ClassComponent /> */}
        {/* <FunctionalComponent /> */}
        
        {/* <LiftingStateComponent /> */}

        <ReverseDataFlowComponent />

      </View>
    </SafeAreaView>
  );
}
