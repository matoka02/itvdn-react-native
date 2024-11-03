import { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const RangeSliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={{ marginHorizontal: 40 }}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
      <Text>Selected value: {sliderValue}</Text>
    </View>
  );
};

export default RangeSliderComponent;
