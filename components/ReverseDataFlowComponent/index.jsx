import { useState } from 'react';
import { View, Button, Text } from 'react-native';

const ChildComponent = ({ onUpdate }) => {
  return (
    <Button
      title='Change status'
      // функция одноразовая
      onPress={() => onUpdate('New message from child component')}
    />
  );
};

const ReverseDataFlowComponent = () => {
  const [message, setMessage] = useState('Initial message');

  const handleMessageUpdate = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <View style={{ padding: 20, display: 'flex', alignSelf: 'center' }}>
      <Text>{message}</Text>
      <ChildComponent onUpdate={handleMessageUpdate} />
    </View>
  );
};

export default ReverseDataFlowComponent;
