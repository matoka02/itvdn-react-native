import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setIsLoading(!isLoading);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#0000ff' />
      ) : (
        <Text>Data is loaded.</Text>
      )}
      <TouchableOpacity style={styles.loadButton} onPress={loadData}>
        <Text style={styles.loadText}>Load data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#ffffff',
  },
  loadButton: {
    padding: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353985',
    borderRadius: 15,
  },
});

export default LoadingScreen;
