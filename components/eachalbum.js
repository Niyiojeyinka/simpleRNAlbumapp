import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TILE_SIZE} from '../constants';

const renderEachAlbum = ({item, index}, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Gallery', {
          albumId: item.id,
        });
      }}
      activeOpacity={0.8}
      style={styles.eachAlbum}
      key={index}>
      <Image
        source={{
          uri:
            item.thumbnailUrl ||
            'https://via.placeholder.com/300.png/09f/fff?text=default',
        }}
        style={styles.featureImg}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>{item.user.name.toUpperCase()}</Text>
        <Text style={styles.info}>{item.user.email}</Text>
        <Text style={styles.info}>{item.user.website}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  details: {
    paddingHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  info: {
    marginHorizontal: 3,
  },
  eachAlbum: {height: TILE_SIZE, width: TILE_SIZE, margin: 2, padding: 5},
  featureImg: {
    width: '95%',
    height: '40%',
  },
});

export default renderEachAlbum;
