import { SafeAreaView, View, Text } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import I18nLocalizationComponent from './components/I18nLocalizationComponent';
import styles from './App.styles';


export default function App() {
  const calendar = RNLocalize.getCalendar(); // Получение типа календаря
  const timeZone = RNLocalize.getTimeZone(); // Получение часового пояса
  const uses24HourClock = RNLocalize.uses24HourClock(); // Проверка использования 24-часового формата
  const currency = RNLocalize.getCurrencies();
  const country = RNLocalize.getCountry();
  const temp = RNLocalize.getTemperatureUnit();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Lesson 19</Text>

        {/* 1. Internationalization (i18n) */}
        {/* <I18nLocalizationComponent /> */}

        {/* 2. Localization (i10n) */}
        <Text>Calendar Type: {calendar}</Text>
        <Text>Time Zone: {timeZone}</Text>
        <Text>24-Hour Clock: {uses24HourClock ? 'Yes' : 'No'}</Text>
        <Text>Country: {country}</Text>
        <Text>Type of currency: {currency}</Text>
        <Text>Units of temperature: {temp}</Text>
      
      </View>
    </SafeAreaView>
  );
}
