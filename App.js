import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import BackgroundFetchComponent from './components/BackgroundFetchComponent';
import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 18 | BackgroundFetch</Text>
        <BackgroundFetchComponent />
      </View>
    </SafeAreaView>
  );
};
