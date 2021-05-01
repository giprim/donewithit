import React from 'react';
import { Text } from 'react-native';

const AppText = ({ children, fontSize = 18, color = '#fff', style }) => {
  return (
    <Text style={[style, { fontSize: fontSize, color: color }]}>
      {children}
    </Text>
  );
};

export default AppText;
