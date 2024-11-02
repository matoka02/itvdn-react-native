import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
  Avatar,
  Button,
  Card,
  CheckBox,
  Input,
  List,
  ListItem,
  Toggle,
  ProgressBar,
  Calendar,
} from '@ui-kitten/components';

const data = new Array(8).fill({
  title: 'Item',
});

const KittenComponent = () => {
  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.title} ${index + 1}`} />
  );

  return (
    <Layout style={styles.container}>
      <Text category='h1' style={styles.headerText}>
        Lesson 06
      </Text>

      <Avatar
        style={styles.avatar}
        source={require('../../assets/images/ava.jpg')}
      />
      <Button style={styles.button}>Edit Profile</Button>
      <Card style={styles.card}>
        <Text>User Bio goes here...</Text>
      </Card>
      <CheckBox style={styles.checkbox}>Enable Notifications</CheckBox>
      <Input style={styles.input} placeholder='Search...' />
      <List style={styles.list} data={data} renderItem={renderItem} />
      <Toggle style={styles.toggle}>Dark Mode</Toggle>
      <ProgressBar style={styles.progressBar} progress={0.5} />
      <Calendar style={styles.calendar} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    margin: 8,
    textAlign: 'center',
  },
  avatar: {
    margin: 8,
  },
  button: {
    margin: 8,
  },
  card: {
    margin: 8,
    width: '90%',
  },
  checkbox: {
    margin: 8,
  },
  input: {
    margin: 8,
    width: '90%',
  },
  list: {
    margin: 8,
    width: '90%',
  },
  toggle: {
    margin: 8,
  },
  tooltip: {
    margin: 8,
  },
  progressBar: {
    margin: 8,
    width: '90%',
  },
  calendar: {
    margin: 8,
    width: '90%',
  },
});

export default KittenComponent;
