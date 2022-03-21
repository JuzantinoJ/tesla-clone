import { StyleSheet, Dimensions } from "react-native"


const styles = StyleSheet.create({
    bikeContainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff9fb',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff9fb', 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 3,
   
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute' 
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%'
  }
})

export default styles;