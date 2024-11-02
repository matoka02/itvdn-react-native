import { TextInput, View, StyleSheet } from 'react-native';

import useForm from '../../hooks/useForm';

const UseFormComponent = () => {
  const { values, handleChange } = useForm({ name: '', email: '' });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Enter a name'}
        value={values.name}
        onChangeText={(text) => handleChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Enter email'}
        value={values.email}
        onChangeText={(text) => handleChange('email', text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 22,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
});

export default UseFormComponent;
