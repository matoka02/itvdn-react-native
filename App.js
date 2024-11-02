import { SafeAreaView, View } from 'react-native';

import CustomButton from './components/CustomButton';
import LocalImage from './components/Image/LocalImage';
import RemoteImage from './components/Image/RemoteImage';
import TextInput from './components/TextInput/TextInput';
import ScrollView from './components/ScrollView/ScrollView';
import ButtonCustom from './components/Button/Button';
import PressableCustom from './components/Pressable/Pressable';
import TouchableOpacityCustom from './components/TouchableOpacity/TouchableOpacity';

import styles from './App.styles';



export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>

      <View>
        <CustomButton title='Press me' onPress={() => console.log('Button pressed')} color='blue' />
        <CustomButton title='Another button' onPress={() => console.log('Another button pressed')} color='green' />
        <CustomButton title='Third button' onPress={() => console.log('Another button pressed')} />
      </View>
      
      <View style={styles.containerImages}>
        <LocalImage />
        <RemoteImage />
      </View>

      <View style={styles.containerTextInput}>
        <TextInput />
      </View>

      <ScrollView />

      <View style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
        <ButtonCustom />
        <PressableCustom />
        <TouchableOpacityCustom />
      </View>
      
    </SafeAreaView>
  );
}


