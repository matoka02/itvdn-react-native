import { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const DimensionComponent = () => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width
  );

  useEffect(() => {
    const onChange = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  // Предположим, что 768px - это порог для 'большого' экрана
  const isLargeScreen = screenWidth >= 768;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isLargeScreen ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 100,
      height: 100,
      margin: 10,
      backgroundColor: 'blue',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

export default DimensionComponent;
