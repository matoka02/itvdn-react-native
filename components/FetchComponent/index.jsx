import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_LINK = 'https://jsonplaceholder.typicode.com/posts/1';

  const B = (props) => (
    <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  );

  useEffect(() => {
    fetch(API_LINK)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>
        <B>Title:</B> {data?.title}
      </Text>
      <Text>
        <B>Body:</B> {data?.body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  errorText: {
    color: 'red',
  },
});

export default FetchComponent;
