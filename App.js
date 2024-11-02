/* 1. UI KITTEN */

// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout } from '@ui-kitten/components';

// import KittenComponent from './components/KittenComponent';

// const HomeScreen = () => (
//   <Layout style={{ flex: 1, paddingTop: 70 }}>
//     <KittenComponent />
//   </Layout>
// );

// export default () => (
//   <ApplicationProvider {...eva} theme={eva.dark}>
//     <HomeScreen />
//   </ApplicationProvider>
// );


/* 2. NativeBase */

// import { NativeBaseProvider, Text, Box } from 'native-base';

// import NativeBaseComponent from './components/NativeBaseComponent';

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Box flex={1} bg='#fff' alignItems='center' justifyContent='center'>
//         <Text>Hello, NativeBase!</Text>
//       </Box>
//       <NativeBaseComponent />
//     </NativeBaseProvider>
//   );
// }



/* 3. React Native Elements */

import { View } from 'react-native';
import { Button, ThemeProvider, createTheme } from '@rneui/themed';

import ReactNativeElementsComponent from './components/ReactNativeElementsComponent';

const theme = createTheme({
  lightColors: {
    primary: 'green',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='Hello, React Native Elements!' />
      </View>
      <ReactNativeElementsComponent />
    </ThemeProvider>
  );
}




