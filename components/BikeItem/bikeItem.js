import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/styledButton';
import styles from './styles';


const BikeItem = (props) => {

  const { name, tagline, image } = props.bike;

    return (
           <View style={styles.bikeContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>      
        
        <View style={styles.buttonsContainer}>
        <StyledButton type='primary'
          content={"Enquire Now"} onPress={() => {
          console.warn("Enquire Button was pressed")
        }}/>
        <StyledButton type='secondary'
          content={"Specification"}  onPress={() => {
          console.warn("Specification Button was pressed")}}/>
         </View>
        


      </View>

    );
};

export default BikeItem;