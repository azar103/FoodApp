import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

class Ingredients extends React.Component {
    render() {
        return(
            <View>
                <Image
                style = {styles.image_style}
                source={require('../Images/ingredients_backdrop.png')} />
            <View style={styles.main_container}>
            <Text style={styles.text_style}>{this.props.navigation.state.params.ingredients.join("\n\n")}</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   main_container: {
       justifyContent: 'center',
       alignItems: 'center',
   },
    text_style: {
        color: '#000000',
        fontSize: 15,
        fontWeight:'bold',
        marginTop: 80  
    },
    image_style: {
        height: 200
    }
})



export default Ingredients