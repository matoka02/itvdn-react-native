import { Text, View } from 'react-native';

import styles from './StyleSheetComponent.style';

const StyleSheetComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native!</Text>
    </View>
  );
};

export default StyleSheetComponent;
