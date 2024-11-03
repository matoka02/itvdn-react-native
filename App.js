import { SafeAreaView, View, Text } from 'react-native';

import AudioPlayerComponent from './components/AudioPlayerComponent';
import AudioRecorderComponent from './components/AudioRecorderComponent';
import VideoPlayerComponent from './components/VideoPlayerComponent';
import CameraComponent from './components/CameraComponent';

import styles from './App.styles';


export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 15</Text>

        {/* <AudioPlayerComponent /> */}
        {/* <AudioRecorderComponent /> */}
        {/* <VideoPlayerComponent /> */}
        <CameraComponent />

      </View>
    </SafeAreaView>
  );
}
