import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BikeList from './components/BikeList/bikeList';
import Header from './components/header/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
     <BikeList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
