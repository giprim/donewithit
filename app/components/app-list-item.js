import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from './app-text';

export default function AppListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.text}>
        <AppText color='black' fontSize={16} style={{ fontWeight: 'bold' }}>
          {title}
        </AppText>
        <AppText color='gray' fontSize={16}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    marginLeft: 10,
  },
});
