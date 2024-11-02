import { View, StyleSheet } from 'react-native';

const MyComponent = () => {
  return <View style={styles.container}>{/* Другие компоненты */}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default MyComponent;
