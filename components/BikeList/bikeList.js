import React from 'react'
import { View, Text, FlatList , Dimensions} from 'react-native'
import BikeItem from '../BikeItem/bikeItem'
import bikes from './bikes'
import styles from './styles'

const BikeList = (props) => {
  return (
      <View style={styles.container}>
          <FlatList
              //data from bikes.js
              data={bikes}
              renderItem={({ item }) => <BikeItem bike={item} />}
              showsVerticalScrollIndicator={false}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').height}
          />
    </View>
  )
}

export default BikeList;

//resources : https://reactnative.dev/docs/flatlist

//Flatlist is a way to A performant interface for rendering basic, flat lists, 
// supporting the most handy features:
// Fully cross-platform.
// Optional horizontal mode.
// Configurable viewability callbacks.
// Header support.
// Footer support.
// Separator support.
// Pull to Refresh.
// Scroll loading.
// ScrollToIndex support.
// Multiple column support.