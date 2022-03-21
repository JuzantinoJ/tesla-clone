import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    logo: {
        width: 140,
        height: 70,
        resizeMode: 'contain', 
    },
    menu: {
        width: 50,
        height: 60,
        resizeMode: 'contain',
    },
    dropShadow: {
        shadowColor: '#d3d4d9',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    }
})

export default styles;

//styles for the header. 
//header will always will be displayed on the top.
//dropshadows