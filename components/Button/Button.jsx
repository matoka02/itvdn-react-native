import { Button } from 'react-native';

const ButtonCustom = () => {
  return (
    <Button
      title='Press me'
      onPress={() => console.log('Button pressed')}
      color='blue'
    />
  );
};

export default ButtonCustom;
