import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'blue',
  },
  activeBox: {
    transform: [{ scale: 1.5 }],
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default styles;
