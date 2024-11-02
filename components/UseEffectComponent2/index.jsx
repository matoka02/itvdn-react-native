import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UseEffectComponent2 = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      })
      .catch(error => console.error(error));
  }, []);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
    const user = users.find(user => user.id === parseInt(userId));
    setSelectedUser(user);
  };

  const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

  const Divider = () => {
    return (
      <View style={{ width: '100%', height: 1, backgroundColor: '#000', marginBottom: 10 }}></View>
    );
  };


  if (loading) {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
        <ActivityIndicator />
        <Text>Loading data...</Text>
      </View>
    );
  }

  return (
    <View>
      <Picker
        itemStyle={{ marginTop: -30 }}
        selectedValue={selectedUserId}
        onValueChange={(itemValue) => handleSelectUser(itemValue)}>
        <Picker.Item label='Select a user' value={null} />
        {users.map(user => (
          <Picker.Item label={user.name} value={user.id.toString()} key={user.id} />
        ))}
      </Picker>
      {selectedUser && (
        <View style={{ width: '90%', padding: 10, borderWidth: 1, borderColor: '#000', borderRadius: 15, marginLeft: 'auto', marginRight: 'auto' }}>
          <Text style={{ fontSize: 22, marginBottom: 5 }}>Details:</Text>
          <Divider />
          <Text><B>Name: </B>{selectedUser.name}</Text>
          <Text><B>Login: </B>{selectedUser.username}</Text>
          <Text><B>Email: </B>{selectedUser.email}</Text>
          <Text><B>Address: </B>{selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</Text>
          <Text><B>Geolocation: </B>lat {selectedUser.address.geo.lat}, lng {selectedUser.address.geo.lng}</Text>
          <Text><B>Phone: </B>{selectedUser.phone}</Text>
          <Text><B>Website: </B>{selectedUser.website}</Text>
          <Text><B>Company: </B>{selectedUser.company.name}</Text>
          <Text><B>Company motto: </B>{selectedUser.company.catchPhrase}</Text>
          <Text><B>Field of activity: </B>{selectedUser.company.bs}</Text>
        </View>
      )}

    </View>
  );
};

export default UseEffectComponent2;