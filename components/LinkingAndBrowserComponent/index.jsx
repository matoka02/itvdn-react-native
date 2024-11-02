import { View, Button, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const ExternalLinksExample = () => {
  const openExternalLink = async () => {
    const url = 'https://google.com';
    // открытие ссылки в системном браузере
    await Linking.openURL(url);
  };

  const openInAppBrowser = async () => {
    const url = 'https://google.com';
    // открытие содержимого во встоенном веб-браузере
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View>
      <Button title='Open External Link' onPress={openExternalLink} />
      <Button title='Open in-app browser' onPress={openInAppBrowser} />
    </View>
  );
};

export default ExternalLinksExample;
