import { SafeAreaView, Text, View } from 'react-native';

import StyleSheetComponent from './components/StyleSheetComponent';
import FlexboxExample from './components/FlexboxExample';
import DimensionComponent from './components/DimensionComponent';
import StandartStilization from './components/StandartStilization';
import FlexboxActiveExample from './components/FlexboxActiveExample';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textTitle}>Lesson 05</Text>
      
      {/* <StyleSheetComponent /> */}

      {/* <FlexboxExample /> */}

      {/* <DimensionComponent /> */}

      <StandartStilization />
      
      <FlexboxActiveExample /> 

    </SafeAreaView>
  );
}