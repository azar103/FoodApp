import React from 'react'
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Recipe extends React.Component{
   
    constructor(props){
        super(props)

    }
   
    render(){
        const { food, displayDetailForFood } = this.props

        return(
           <TouchableOpacity 
                 style={styles.main_container}
                 onPress={()=> displayDetailForFood(food.url, food.title, food.category, food.description, food.time, food.ingredients)}
                 
           >
               <Image source={{ uri: food.url }}  style={styles.image_style}/>
               <Text style={styles.title_style} numberOfLines={2}>{food.title}</Text>
               <Text style={styles.category_style}>{food.category}</Text>
           </TouchableOpacity>
        )
    }


}
const styles = StyleSheet.create({
    main_container:{
        flex: 1, 
        flexDirection: 'column', 
        margin: 3,
        borderRadius: 4,
        borderWidth: 1,
        maxWidth: 190
    },
    image_style:{
        height: 160
    },
    title_style:{
       textAlign:"center",
       fontSize: 20,
       fontWeight: "bold",
       height: 50
    },
    category_style:{
        height: 40,
        fontSize: 20,
        textAlign:"center"
    }


})

export default  Recipe