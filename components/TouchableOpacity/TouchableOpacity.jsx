import { TouchableOpacity, Text } from 'react-native';

const TouchableOpacityCustom = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
      activeOpacity={0.7}
    >
      <Text>Натисніть мене</Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityCustom;
