import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from './app-text';

const AppCard = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText color='#222' fontSize={18} style={styles.text}>
          {title}
        </AppText>
        <AppText fontSize={16} color='#f11' style={styles.text}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginTop: 15,
    backgroundColor: '#f4f4f4',
    elevation: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  text: {
    marginBottom: 5,
  },
});

export default AppCard;
