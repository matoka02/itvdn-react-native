import { Text, View } from 'react-native';

const Greeting = (props) => {
  return <Text>Hi, {props.name}!</Text>;
};

const ExampleComponent1 = () => {
  return (
    <View style={{ display: 'flex', alignSelf: 'center' }}>
      <Greeting name='Stanislav' />
      <Greeting name='Anna' />
    </View>
  );
};

export default ExampleComponent1;
