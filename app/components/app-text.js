import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppText = ({ children, fontSize, color, style }) => {
  return (
    <Text style={[styles.color, style, { fontSize: fontSize, color: color }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  color: {
    fontSize: 18,
    color: '#fff',
  },
});
export default AppText;
