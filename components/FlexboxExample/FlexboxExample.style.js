import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
