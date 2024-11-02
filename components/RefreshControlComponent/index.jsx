import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  RefreshControl,
} from 'react-native';

const RefreshControlComponent = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    fetch('https://randomuser.me/api/?results=8')
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        let newdata = userData.concat(responseJson.results);
        setUserData(newdata);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={{ fontSize: 20, padding: 10 }}>
        {item.name.first} {item.name.last}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8' }} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        enableEmptySections={true}
        renderItem={ItemView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
        }
      />
    </SafeAreaView>
  );
};
export default RefreshControlComponent;
