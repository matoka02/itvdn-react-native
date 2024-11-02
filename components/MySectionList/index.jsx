import { Image, SectionList, Text, View } from 'react-native';

import { DATA } from './data';
import styles from './MySectionList.style';

const MySectionList = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title, color } }) => (
        <Text style={styles.header(color ?? 'pink')}>{title}</Text>
      )}
    />
  );
};

export default MySectionList;
