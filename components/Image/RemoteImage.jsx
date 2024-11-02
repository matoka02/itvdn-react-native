import { Image } from 'react-native';

const RemoteImage = () => {
  return (
    <Image
      source={{ uri: 'https://placekitten.com/200/300' }}
      style={{ width: 200, height: 300 }}
    />
  );
};

export default RemoteImage;
