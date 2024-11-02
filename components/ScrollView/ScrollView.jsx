import { ScrollView, Text } from 'react-native';
import styles from './ScrollView.style';

const MyScrollView = () => {
  return (
    <ScrollView style={styles.container}>
      {[...Array(20).keys()].map((i) => (
        <Text key={i} style={styles.item}>
          Element {i}
        </Text>
      ))}
    </ScrollView>
  );
};

export default MyScrollView;
