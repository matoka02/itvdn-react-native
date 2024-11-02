import { FlatList, View, Text } from 'react-native';

import { DATA } from './data';
import styles from './MyFlatList.style';

// const data = [
//   { id: '1', title: 'Element 1' },
//   { id: '2', title: 'Element 2' },
//   { id: '3', title: 'Element 3' },
//   { id: '4', title: 'Element 4' },
//   // ... Другие элементы
// ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyFlatList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default MyFlatList;
