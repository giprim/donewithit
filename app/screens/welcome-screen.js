import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/app-button';
import AppText from '../components/app-text';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/favicon.png')} />
        <AppText fontSize={18}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          text='Log in'
          onPress={() => console.log('log in')}
          style={{ marginVertical: 8, backgroundColor: 'green' }}
        />
        <AppButton
          text='Sign up'
          onPress={() => console.log('sign up')}
          style={{ marginVertical: 8, backgroundColor: 'red' }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 18,
  },
  logoContainer: {
    position: 'absolute',
    top: 190,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 10,
    width: 70,
    height: 70,
  },
});

export default WelcomeScreen;
