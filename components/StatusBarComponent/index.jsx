import { View, StatusBar, StyleSheet, Platform } from 'react-native';

const StatusBarComponent = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#ecf0f1' />
    </View>
  );
};

console.log('my Platform.OS:', Platform.OS);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default StatusBarComponent;
