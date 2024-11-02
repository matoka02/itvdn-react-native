import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

const StandartStilization = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center' }}>
        Hello, world!
      </Text>

      <View
        style={{ padding: 10, backgroundColor: 'lightgray', borderWidth: 1 }}
      >
      </View>

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white' }}>Press me</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'url' }}
        style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'pink' }}
      />

      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        placeholder='Input text'
      />
    </View>
  );
};

export default StandartStilization;
