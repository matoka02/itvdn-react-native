import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  buttonCustom: (color) => ({
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: color,
  }),
});

export default styles;
