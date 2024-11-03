import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const home = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href='/list'>Go to List</Link>
    </View>
  );
};

export default home;
