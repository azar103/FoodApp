import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
class CategoryItem extends React.Component {


   render() {

       return(

        <View style = {styles.main_container}>
        <Image  
        source ={{uri: this.props.category.url}}
        style={styles.image_style}/>    
        <Text style={styles.text_category_style}>{this.props.category.name}</Text>
           <Text style={styles.text_style}>{this.props.category.number} recipes</Text> 
        </View>
       )
   }
}
const mapStateToProps = (state) => {
    return {
        categories: state.setCategory.categories
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    image_style: {
       justifyContent: 'center',
   alignItems: 'center',
   width: 400,
   height: 300,
    },
    text_category_style: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 30
    } ,
    number_category_style: {
        textAlign: 'center',
        fontSize: 16
    },
    text_style: {
        textAlign: 'center'
    }
})



export default connect(mapStateToProps)(CategoryItem)