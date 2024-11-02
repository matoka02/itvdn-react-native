import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const FunctionalComponent = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((previousState) => !previousState);
  };

  return (
    <View
      style={{
        backgroundColor: isDarkTheme ? '#000' : '#FFF',
        padding: 20,
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: isDarkTheme ? '#FFF' : '#000' }}>
        {isDarkTheme ? 'Dark theme on' : 'Light theme on'}
      </Text>
      <Switch
        value={isDarkTheme}
        onValueChange={toggleTheme}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default FunctionalComponent;
