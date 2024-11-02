import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Switch,
  Slider,
  CheckIcon,
  Select,
  Avatar,
} from 'native-base';

export default function NativeBaseComponent() {
  return (
    <Box flex={1} justifyContent='center'>
      <VStack space={4} alignItems='center'>
        {/* Text Component */}
        <Text fontSize='xl' bold color='coolGray.800'>
          Hello, NativeBase!
        </Text>

        {/* Button Component */}
        <Button colorScheme='blue'>Click Me</Button>

        {/* Switch Component */}
        <HStack alignItems='center'>
          <Text>Dark Mode</Text>
          <Switch size='sm' />
        </HStack>

        {/* Slider Component */}
        <Box alignItems='center' w='100%'>
          <VStack w='3/4' maxW='300' space={4}>
            <Slider defaultValue={70} colorScheme='orange'>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Slider defaultValue={20} colorScheme='emerald'>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Slider defaultValue={50} colorScheme='indigo'>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </VStack>
        </Box>

        {/* Select Component */}
        <Select
          selectedValue='js'
          minWidth={200}
          placeholder='Choose Language'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label='JavaScript' value='js' />
          <Select.Item label='TypeScript' value='ts' />
          <Select.Item label='Python' value='py' />
        </Select>

        {/* Avatar Component */}
        <Avatar
          bg='green.500'
          source={{
            uri: 'https://nativebase.io/img/native-base-icon.png',
          }}
        >
          NB
        </Avatar>
      </VStack>
    </Box>
  );
}
