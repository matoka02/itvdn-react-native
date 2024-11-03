import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';

import styles from './App.styles';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (

    /* 1. Stack Navigation */
    // <SafeAreaView style={styles.mainContainer}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name='Home'
    //         component={HomeScreen}
    //         options={{ title: 'Welcome' }}
    //       />
    //       <Stack.Screen 
    //         name='Profile' 
    //         component={ProfileScreen} 
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>


    /* 2. Tab Navigation */
    // <SafeAreaView style={styles.mainContainer}>
    //   <NavigationContainer>
    //     <Tab.Navigator
    //       screenOptions={({ route }) => ({
    //         tabBarIcon: ({ focused, color, size }) => {
    //           let iconName;
    //           if (route.name === 'Home') {
    //             iconName = focused ? 'ios-home' : 'ios-home-outline';
    //           } else if (route.name === 'Profile') {
    //             iconName = focused ? 'ios-man' : 'ios-man-outline';
    //           }
    //           return <Ionicons name={iconName} size={size} color={color} />;
    //         },
    //         tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'gray',
    //       })}>
    //       <Tab.Screen 
    //         name='Home' 
    //         component={HomeScreen} 
    //         options={{ tabBarBadge: 3 }} 
    //       />
    //       <Tab.Screen 
    //         name='Profile' 
    //         component={ProfileScreen} 
    //       />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </SafeAreaView>


    /* 3. Drawer Navigation */
    <SafeAreaView style={styles.mainContainer}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Profile' component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
}
