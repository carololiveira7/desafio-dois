import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>MEUS 10 FILMES FAVORITOS</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/filme02.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme01.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme03.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme04.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme05.jpg')} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/filme06.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme07.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme08.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme09.jpg')} style={styles.image} />
        <Image source={require('./assets/images/filme10.jpg')} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },

  image: {
    width: 300,
    height: 500,
    border: '3px solid white',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  H1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});
