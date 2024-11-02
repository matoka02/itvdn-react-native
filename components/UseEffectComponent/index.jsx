import { useState, useEffect } from 'react';
import { Text } from 'react-native';

const UseEffectComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text>Elapsed time: {seconds} seconds</Text>;
};

export default UseEffectComponent;
