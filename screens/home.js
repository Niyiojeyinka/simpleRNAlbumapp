import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import renderEachAlbum from '../components/eachalbum';
import {NUM_OF_COLS} from '../constants';
import request from '../helpers/request';
import formatAlbumData from '../helpers/albumdata';
import LoadingScreen from '../components/loading';

const Home = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let response = await request('albums', 'GET');
      const albumsresponse = response.body;
      response = await request('users', 'GET');
      const usersresponse = response.body;
      response = await request('photos', 'GET');
      const photosresponse = response.body;
      const fdata = formatAlbumData(
        albumsresponse,
        usersresponse,
        photosresponse,
      );
      setAlbums(fdata);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!loading) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.screen}>
          <View style={styles.top}>
            <Text style={styles.filterText}>FILTER</Text>
            <Image
              source={require('../assets/filter.png')}
              style={styles.icon}
            />
          </View>
          <FlatList
            data={albums}
            renderItem={(item) => {
              return renderEachAlbum(item, navigation);
            }}
            numColumns={NUM_OF_COLS}
            style={styles.grid}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </SafeAreaView>
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
    marginHorizontal: 2,
  },
  featureImg: {
    width: '95%',
    height: 100,
  },

  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
  top: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    backgroundColor: 'white',
    flex: 0.95,
  },
  filterText: {
    fontWeight: 'bold',
  },
});

export default Home;
