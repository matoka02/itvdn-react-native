import { SafeAreaView, View, Text } from 'react-native';


import ActivityIndicatorComponent from './components/ActivityIndicatorComponent';
import AlertComponent from './components/AlertComponent';
import ModalComponent from './components/ModalComponent';
import DimensionsComponent from './components/DimensionsComponent';
import PixelRatioComponent from './components/PixelRatioComponent';
import StatusBarComponent from './components/StatusBarComponent';
import KeyboardAvoidingViewComponent from './components/KeyboardAvoidingViewComponent';
import LinkingAndBrowserComponent from './components/LinkingAndBrowserComponent';
import RefreshControlComponent from './components/RefreshControlComponent';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 07</Text>
        
        {/* <ActivityIndicatorComponent /> */}

        {/* <AlertComponent /> */}

        {/* <ModalComponent /> */}

        {/* <DimensionsComponent /> */}
        
        {/* <PixelRatioComponent /> */}

        {/* <StatusBarComponent /> */}
        
        {/* <LinkingAndBrowserComponent /> */}

        <RefreshControlComponent />
        
      </View>
    </SafeAreaView>
    
    // uncomment this and delete previous if using <KeyboardAvoidingViewComponent /> component

    // <>
    // <KeyboardAvoidingViewComponent />
    // </>
  );
}
