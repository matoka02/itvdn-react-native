// Now App.js is no longer the root file of our application
// because we changed main start point in package.json
// "main": "node_modules/expo/AppEntry.js" ❌
// "main": "expo-router/entry" ✅

// import { SafeAreaView, View, Text } from "react-native";
// import styles from "./App.styles";
//
// export default function App() {
//     return (
//         <SafeAreaView style={styles.mainContainer}>
//             <View>
//                 <Text style={styles.title}>Lesson 12 | Expo Routing</Text>
//
//             </View>
//         </SafeAreaView>
//     );
// };