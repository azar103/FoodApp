
import React from 'react'
import {StyleSheet, Image, View, Text,  ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

class FoodDetail extends React.Component{

    constructor(props) {
        super(props)

    }
    _displayIngredients = (ingredients) => {
        this.props.navigation.navigate("Ingredients", {ingredients: ingredients})
      
    }
  


     
    render(){
        const {url, title, category, time, description, ingredients} = this.props.navigation.state.params
        return(
            <ScrollView style={styles.main_container}>
                <Image style={styles.image_style} source={{uri: url}}/>
                <Text style={styles.title_style}>{title}</Text>
                <Text style={styles.category_style}>{category}</Text>
                <View style={styles.time_main_style}>
                <Image style={styles.time_img_style} 
                       source={require('../Images/ic_alarm.png')}
                 />
                <Text style={styles.time_style}>{time} minutes</Text>
                </View>
                <View style={styles.button_main_style}>
                <TouchableHighlight
                    title='View Ingredients'
                    style={styles.button_style}
                    onPress = {() => this._displayIngredients(ingredients)}        
                ><Text style={styles.ingredients_style}>View Ingredients</Text></TouchableHighlight>
                </View>
                <View style={styles.description_main_style}>
                <Text style={styles.description_style}>
                    {description.join("\n\n")}
                </Text>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    main_container:{
         flex:1
    },
    image_style:{
        height: 260
    },
    title_style:{
        fontWeight: "bold",
        fontSize: 40,
        paddingTop: 5,
        textAlign: "center"
    },
    category_style:{
        paddingTop: 5,
        color: '#7bd5a0',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    description_style:{
        fontSize: 20,
        margin: 10,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    time_style: {
       fontSize: 20,
       fontWeight: 'bold',
       marginLeft: 5
    
    },
    time_main_style: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5
    },
    time_img_style:{
        width: 30,
        height: 30
    },
    button_style: {
        borderRadius: 8,   
        color: "#7bd5a0",
        borderWidth: 1,
        borderColor: '#7bd5a0',
        fontWeight: 'bold',
        width: 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10
    },
    button_main_style: {
        alignItems: 'center'
    },
    button_pressed: {
        backgroundColor: '#7bd5a0',
        color: '#FFFFFF',
        borderRadius: 8,   
        borderWidth: 1,
        borderColor: '#7bd5a0',
        fontWeight: 'bold',
        width: 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10
    },
    description_main_style: {
        alignItems: 'center'
    },
    ingredients_style: {
        color: '#7bd5a0'
    }
        
})

export default FoodDetail