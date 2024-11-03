import { SafeAreaView, View, Text } from 'react-native';

import MyFormComponent from './components/MyFormComponent';
import SwitchComponent from './components/SwitchComponent';
import RangeSliderComponent from './components/RangeSliderComponent';
import PickerComponent from './components/PickerComponent';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 13</Text>

          {/* <MyFormComponent /> */}
          {/* <SwitchComponent /> */}
          {/* <RangeSliderComponent /> */}
          <PickerComponent />
          
      </View>
    </SafeAreaView>
  );
}
