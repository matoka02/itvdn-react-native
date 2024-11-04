import { SafeAreaView, Text, View } from 'react-native';

import { usePushNotifications } from './hooks/usePushNotification';
import DonutChart from './components/DonutChart/DonutChartContainer';
import BarChart from './components/BarChart';
import { samples } from './store';
import styles from './App.styles';

export default function App() {
  const { expoPushToken } = usePushNotifications();
  console.log(expoPushToken);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 18</Text>
      <View style={styles.donutChart}>
        <DonutChart value={samples.at(-3)} />
      </View>
      <View style={styles.barChart}>
        <BarChart samples={samples} />
      </View>
    </SafeAreaView>
  );
}
