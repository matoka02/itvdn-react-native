import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // height: '100vh',
    display: 'flex',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  
  // uncomment this and delete previous if using <KeyboardAvoidingViewComponent /> component
  // mainContainer: {
  //     flex: 1,
  // },
  // title: {
  //     display: 'flex',
  //     alignSelf: 'center',
  //     marginBottom: 360,
  //     fontSize: 28,
  //     fontWeight: 'bold'
  // }
});

export default styles;
