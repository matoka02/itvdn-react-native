import { View, Button, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native'; // устаревший импорт

const AsyncStorageComponent = () => {
  // Функция сохранения данных
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'Stored value');
      console.log('Data successfully saved');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  // Функция для получения данных
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        alert('Received data: ' + value);
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Save data' onPress={storeData} />
      <Button title='Get Data' onPress={retrieveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default AsyncStorageComponent;
