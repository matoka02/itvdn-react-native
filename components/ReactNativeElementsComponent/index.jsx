import { View } from 'react-native';
import { SearchBar } from '@rneui/base';
import {
  Button,
  Avatar,
  Badge,
  CheckBox,
  Divider,
  Icon,
  ListItem,
  Text,
} from 'react-native-elements';

const App = () => {
  return (
    <View style={{ flex: 1, paddingTop: 70 }}>
      {/* Кнопка */}
      <Button title='Press me' style={{ marginBottom: 8 }} />

      <View style={{ display: 'flex', alignSelf: 'center', marginBottom: 8 }}>
        {/* Аватар */}
        <Avatar
          rounded
          source={{ uri: 'https://placekitten.com/200/300' }}
          size='large'
        />
        <Text>John Doe</Text>
      </View>

      <View style={{ marginBottom: 8 }}>
        {/* Значок */}
        <Badge value='99+' status='error' />
      </View>

      {/* Флажок */}
      <CheckBox title='Confirm' checked={true} />

      {/* Разделитель */}
      <Divider style={{ backgroundColor: 'blue' }} />

      <View style={{ marginTop: 8 }}>
        {/* Иконка */}
        <Icon name='fingerprint' />
      </View>

      {/* Элемент списка */}
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: 'person-outline',
            type: 'material',
            size: 26,
          }}
          containerStyle={{ backgroundColor: '#c2c2c2' }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Avatar
          rounded
          title='A'
          containerStyle={{ backgroundColor: 'grey' }}
        />
        <ListItem.Content>
          <ListItem.Title>Adam Eva</ListItem.Title>
          <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <View>
        <SearchBar
          placeholder='Type Here...'
          onChangeText={() => {}}
          value={'Search for friends...'}
        />
      </View>
    </View>
  );
};
export default App;
