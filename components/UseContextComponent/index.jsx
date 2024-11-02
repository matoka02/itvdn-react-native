import React, { useContext } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import ThemeContext from '../../ThemeContext';

const UseContextComponent = () => {
  const { theme, setTheme, title } = useContext(ThemeContext);

  return (
    <View style={{ display: 'flex', alignSelf: 'center' }}>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: title,
        }}
        onPress={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <Text style={{ color: title }}>Toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseContextComponent;
