import { View, StyleSheet, Button, Alert } from 'react-native';

const AlertComponent = () => {
  const createButtonAlert1 = () =>
    Alert.alert(
      'Confirmation',
      'Are you sure you want to continue?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Canceled'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('Confirmed') },
      ],
      { cancelable: false }
    );

  const createButtonAlert2 = () =>
    Alert.alert('Payment', 'Are you sure you want to make a payment?', [
      {
        text: 'Card',
        onPress: () => console.log('Card'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Canceled'),
        style: 'cancel',
      },
      { text: 'Cash', onPress: () => console.log('Cash') },
    ]);

  return (
    <View style={styles.container}>
      <Button title={'Alert 1'} onPress={createButtonAlert1} />
      <Button title={'Alert 2'} onPress={createButtonAlert2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default AlertComponent;
