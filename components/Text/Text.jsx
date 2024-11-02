import { Text, StyleSheet } from "react-native";

const MyTextComponent = () => {
  return <Text style={styles.textStyle}>Welcome to React Native!</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MyTextComponent;
