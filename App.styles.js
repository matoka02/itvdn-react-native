import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#ffffff',
  },
  donutChart: {
    flex: 50,
  },
  barChart: {
    flex: 50,
    marginBottom: 60,
  },
});

export default styles;
