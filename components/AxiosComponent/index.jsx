import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const AxiosComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

  const B = (props) => (
    <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
  );

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          // заголовки (н-р, для авторизации)
          'Content-Type': 'application/json',
          // Authorization: 'Bearer ваш_токен_авторизации',
          // 'Custom-Header': 'доп.информация',
        },
        // другие параметры запроса, по необходимости
        params: {
          queryParam1: 'value1',
          queryParam2: 'value2',
        },
        timeout: 5000, // время ожидания в милисекундах
      });

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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

export default AxiosComponent;
