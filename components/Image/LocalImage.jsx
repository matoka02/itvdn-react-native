import { Image } from 'react-native';

const LocalImage = () => {
  return (
    <Image
      source={require('../../assets/images/cat.jpg')}
      style={{ width: 100, height: 100 }}
    />
  );
};

export default LocalImage;
