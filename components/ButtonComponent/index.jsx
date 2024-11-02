import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ name, buttonStyle, onPressHandler }) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPressHandler}>
      <View>
        <Text style={styles.buttonTextStyle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ButtonComponent;
