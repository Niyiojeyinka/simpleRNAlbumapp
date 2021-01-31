import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
const LoadingScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Fetching data....</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default LoadingScreen;
