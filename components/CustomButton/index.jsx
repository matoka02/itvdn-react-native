import { TouchableOpacity, Text } from 'react-native';

import styles from './CustomButton.style';

// Определение компонента Button
const Index = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonCustom(color ?? 'red')}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Экспорт компонента
export default Index;


