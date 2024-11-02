import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    if (values[name]) console.log(`${name.toUpperCase()}: `, values[name]);
  };

  return { values, handleChange };
}
