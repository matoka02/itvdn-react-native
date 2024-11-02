import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './FlexboxActiveExample.style';

const FlexboxActiveExample = () => {
  const [activeBox, setActiveBox] = useState(null);

  const getBoxStyle = (boxNumber) => [
    styles.box,
    activeBox === boxNumber && styles.activeBox,
    boxNumber === 1 ? styles.box1 : boxNumber === 2 ? styles.box2 : styles.box3,
  ];

  return (
    <View style={styles.container}>
      {[1, 2, 3].map((boxNumber) => (
        <TouchableOpacity
          key={boxNumber}
          onPress={() => setActiveBox(boxNumber)}
        >
          <View style={getBoxStyle(boxNumber)}>
            <Text style={styles.text}>{boxNumber}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FlexboxActiveExample;
