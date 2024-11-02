import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: (color) => ({
    fontSize: 18,
    backgroundColor: color,
    padding: 10,
  }),
  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 15,
  },
  title: {
    fontSize: 16,
  },
  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});

export default styles;
