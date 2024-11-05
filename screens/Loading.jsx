// import LottieView from 'lottie-react-native';
import Lottie from 'react-lottie';
import { StyleSheet, View } from 'react-native';

import { BACKGROUND_COLOR } from '../constants/colors';
import animationData from '../assets/animations/Loading.json';

const Loading = () => {
  // return (
  //   <View style={styles.main}>
  //     <LottieView autoPlay
  //       loop source={require('../assets/animations/Loading.json')}
  //       style={{ height: 220, width: 220 }}
  //     />
  //   </View>
  // )

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <View style={styles.main}>
      <Lottie options={defaultOptions} height={220} width={220} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  text: {
    color: '#fff',
    opacity: 0.4,
    fontSize: 30
  }
})

export default Loading;