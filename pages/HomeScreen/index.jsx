import { View, Text, Button } from 'react-native';

import styles from '../../App.styles';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Lesson 12</Text>

      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
      <Button
        title="Go to Stas's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Stas' })}
      />
    </View>
  );
};

export default HomeScreen;
