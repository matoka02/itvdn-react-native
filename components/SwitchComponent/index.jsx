import { useState } from 'react';
import { View, Switch, Text } from 'react-native';

const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ display: 'flex', alignSelf: 'center' }}>
      <Switch
        style={{ display: 'flex', alignSelf: 'center' }}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{ paddingTop: 10 }}>
        {isEnabled ? 'Enabled' : 'Disabled'}
      </Text>
    </View>
  );
};
export default SwitchComponent;
