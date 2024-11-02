import { Pressable, Text } from 'react-native';

const PressableCustom = () => {
  return (
    <Pressable
      onPress={() => console.log('Pressed')}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'lightblue' : 'blue' },
      ]}
    >
      {({ pressed }) => (
        <Text style={{ color: 'white' }}>
          {pressed ? 'Pressed!' : 'Press me'}
        </Text>
      )}
    </Pressable>
  );
};

export default PressableCustom;
