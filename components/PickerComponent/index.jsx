import { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerComponent = () => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={{ marginHorizontal: 40 }}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='javascript' />
        <Picker.Item label='Python' value='python' />
        <Picker.Item label='C++' value='c++' />
      </Picker>
      <Text style={{ alignSelf: 'center' }}>
        Selected value: {selectedValue}
      </Text>
    </View>
  );
};
export default PickerComponent;
