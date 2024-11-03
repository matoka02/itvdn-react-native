import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.user}>
        This is {!route.params ? 'DEFAULT' : route.params.name}'s profile
      </Text>
      <Button 
        title='Back Home' 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});

export default ProfileScreen;
