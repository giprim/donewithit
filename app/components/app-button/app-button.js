import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../app-text/app-text';

function AppButton({ text, onPress, style = {} }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <AppText fontSize={20}>{text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AppButton;
