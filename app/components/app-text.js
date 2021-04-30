import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AppText = ({ children, fontSize }) => {
  return <Text style={[styles.color, { fontSize: fontSize }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  color: {
    fontSize: 18,
    color: '#fff',
  },
});
export default AppText;
