import { useEffect, useState } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AnimatedComponent = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Начальное значение прозрачности: 0

  const animIn = Animated.timing(fadeAnim, {
    toValue: 1, // Конечное значение прозрачности: 1
    duration: 2000, // Продолжительность анимации
    useNativeDriver: true, // Добавить для оптимизации производительности
  });

  const animOut = Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  });

  useEffect(() => {
    animIn.start();
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          ...styles.fadingContainer,
          opacity: fadeAnim,
        }}
      >
        <View style={styles.box}>
          <Text style={styles.text}>Opacity animation</Text>
        </View>
      </Animated.View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          animIn.start();
        }}
      >
        <Text style={{ textAlign: 'center' }}>Fade in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          animOut.start();
        }}
      >
        <Text style={{ textAlign: 'center' }}>Fade out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    display: 'flex',
    alignSelf: 'center',
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(40,65,145,0.35)',
  },
});

export default AnimatedComponent;
