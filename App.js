import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import UseContextComponent from './components/UseContextComponent';
import UseCallbackComponent from './components/UseCallbackComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseFormComponent from './components/useFormComponent';

import ThemeContext from './ThemeContext';
import styles from './App.styles';


export default function App() {
  const [theme, setTheme] = useState('light');

  let bg = theme === 'light' ? '#fff' : '#000';
  let title = theme === 'light' ? '#000' : '#fff';

  return (
    <ThemeContext.Provider value={{ theme, setTheme, bg, title }}>
      <SafeAreaView style={[styles.mainContainer, { backgroundColor: bg }]}>
        <View>
          <Text style={[styles.title, { color: title }]}>Lesson 09</Text>
        </View>
        
        {/* <UseContextComponent /> */}
        {/* <UseCallbackComponent /> */}
        {/* <UseMemoComponent /> */}
        <UseFormComponent />
      
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
