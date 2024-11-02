import { View, Text } from 'react-native';

import styles from './FlexboxExample.style';

const FlexboxExample = () => {
  return (

    // <View style={styles.container}>
    //   <View style={[styles.box, styles.box1]}>
    //     <Text style={styles.text}>1</Text>
    //   </View>
    //   <View style={[styles.box, styles.box2]}>
    //     <Text style={styles.text}>2</Text>
    //   </View>
    //   <View style={[styles.box, styles.box3]}>
    //     <Text style={styles.text}>3</Text>
    //   </View>
    // </View>

    // рефакторинг
    <View style={styles.container}>
      {[1, 2, 3].map((boxNumber) => (
        <View
          key={boxNumber}
          style={[
            styles.box,
            boxNumber === 1 ? 
              styles.box1 : boxNumber === 2 ? 
              styles.box2 : styles.box3,
          ]}
        >
          <Text style={styles.text}>{boxNumber}</Text>
        </View>
      ))}
    </View>
  );
};

export default FlexboxExample;
