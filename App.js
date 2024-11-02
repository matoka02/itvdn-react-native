import { SafeAreaView, Text, View } from 'react-native';

import MyFlatList from './components/MyFlatList';
import MySectionList from './components/MySectionList';
import MyListComponent from './components/MyListComponent';

import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textTitle}>Hello, UUID!</Text>
      
      {/* <MyFlatList /> */}

      {/* <View style={{ marginTop: 20 }}>
        <MySectionList />
      </View> */}

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <MyListComponent />
      </View>

    </SafeAreaView>
  );
}
