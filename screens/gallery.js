import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  FlatList,
} from 'react-native';
import renderEachImage from '../components/eachimage';
import request from '../helpers/request';
import {NUM_OF_COLS} from '../constants';
import LoadingScreen from '../components/loading';
import ControlBtn from '../components/controlbtn';

const Gallery = ({route}) => {
  const [loading, setLoading] = React.useState(true);
  const [album, setAlbum] = React.useState([]);
  const [currentDisplay, setCurrentDisplay] = React.useState(0);
  const {albumId} = route.params;
  React.useEffect(() => {
    const fetchData = async () => {
      let response = await request(`albums/${albumId}/photos`, 'GET');
      const photosresponse = response.body;
      setAlbum(photosresponse);
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
            <Image
              source={{
                uri: album[currentDisplay]['url'] || '',
              }}
              style={styles.display}
            />
            <Text style={styles.title}>{album[currentDisplay]['title']}</Text>
            <ControlBtn
              handleClick={() => {
                if (currentDisplay < album.length) {
                  setCurrentDisplay(currentDisplay + 1);
                }
              }}
              label={'Next ->'}
              styles={{top: '50%', right: 5}}
            />
            <ControlBtn
              handleClick={() => {
                if (currentDisplay > 0) {
                  setCurrentDisplay(currentDisplay - 1);
                }
              }}
              label={'<- Prev'}
              styles={{top: '50%', left: 5}}
            />
          </View>
          <View style={styles.grid}>
            <FlatList
              data={album}
              renderItem={(item) => {
                return renderEachImage(item, (index) => {
                  setCurrentDisplay(index);
                });
              }}
              numColumns={NUM_OF_COLS}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
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
  display: {
    width: '100%',
    height: '90%',
  },
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
  top: {
    flex: 0.5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    backgroundColor: 'white',
    flex: 0.5,
  },
  filterText: {
    fontWeight: 'bold',
  },
});

export default Gallery;
