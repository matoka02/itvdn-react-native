import { View, Text } from 'react-native';
import uuid from 'react-native-uuid';

import styles from './MyListComponent.style';

const data = ['Apple', 'Banana', 'Orange'];

const MyListComponent = () => {
  return (
    <View>
      {data.map((item, index) => (
        <Text key={uuid.v4()} style={styles.mapElem}>
          {index + 1}. {item}:{'\n'} {uuid.v4()}
        </Text>
      ))}
    </View>
  );
};

export default MyListComponent;
