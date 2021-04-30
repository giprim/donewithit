import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

const AppLayout = ({ children }) => {
  return <View style={styles.layoutStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  layoutStyle: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default AppLayout;
