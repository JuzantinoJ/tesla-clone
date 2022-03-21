import React from 'react'
import { View , Text, Image} from 'react-native'
import styles from './styles'


const Header = (props) => {
  return (
      <View style={styles.container}>
          <Image style={[styles.logo , styles.dropShadow ]} source={require('../../assets/images/wastelogo.png')}/>
          <Image style={[styles.menu, styles.dropShadow]} source={require('../../assets/images/menu.png')} />
    </View>
  )
}

export default Header;

//Header only shows the logo & an icon image. 
//Header will stay on top of the page and can be used in other pages.