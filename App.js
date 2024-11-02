import { SafeAreaView, View, Text } from 'react-native';

import UseStateComponent from './components/UseStateComponent';
import UseStateComponent2 from './components/UseStateComponent2';
import UseStateComponent3 from './components/UseStateComponent3';
import UseEffectComponent from './components/UseEffectComponent';
import UseEffectComponent2 from './components/UseEffectComponent2';

import styles from './App.styles';


export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 08</Text>
        
        {/* <UseStateComponent /> */}
        {/* <UseStateComponent2 /> */}
        {/* <UseStateComponent3 /> */}

        {/* <UseEffectComponent /> */}
        <UseEffectComponent2 />
      
      </View>
    </SafeAreaView>
  );
}
