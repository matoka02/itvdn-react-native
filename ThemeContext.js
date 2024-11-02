import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: (theme) => {},
  bg: '#fff',
  title: '#000',
});

export default ThemeContext;
