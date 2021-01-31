import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TILE_SIZE} from '../constants';

const renderEachImage = ({item, index}, handlePress) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(index);
      }}
      activeOpacity={0.8}
      accessibilityLabel={'each-image'}
      style={styles.eachImage}
      key={index}>
      <Image source={{uri: item.thumbnailUrl}} style={styles.featureImg} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  eachImage: {
    height: TILE_SIZE,
    width: TILE_SIZE,
    margin: 2,
    padding: 5,
  },
  featureImg: {
    width: '95%',
    height: '100%',
  },
});

export default renderEachImage;
