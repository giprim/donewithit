import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppCard from '../components/app-card';
import AppListItem from '../components/app-list-item';

const CardListScreen = () => {
  return (
    <View style={styles.container}>
      <AppCard
        image={require('../assets/background.jpg')}
        subTitle='$100'
        title='Jacket'
      />
      <AppListItem
        image={require('../assets/background.jpg')}
        subTitle='4 listings'
        title='GI Prim'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    paddingVertical: 20,
  },
});

export default CardListScreen;
