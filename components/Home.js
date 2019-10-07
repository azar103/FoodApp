import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux'

import Recipe from './Recipe';


class Home extends React.Component {
  constructor(props){
    super(props)
    
  }
  _loadFoods= () =>{
    const action =  { type: "GET_RECIPES" }
    this.props.dispatch(action)
  }

  componentDidMount() {
   this._loadFoods()
  }
  
  _displayDetailForFood = (url, title, category, description, time, ingredients) => {
    this.props.navigation.navigate("FoodDetail",{url: url, title: title, category: category, description: description, time: time, ingredients: ingredients})
  }
  render(){
    return(
        <View style={styles.main_container} >
        <FlatList 
          keyExtractor= {(item) => item.id.toString()}
           data = {this.props.recipes}
           renderItem= {({item}) => 
           <Recipe 
           food={item} 
           displayDetailForFood = {this._displayDetailForFood}
           />
        }
           numColumns = {2}      
           />

     </View>
    )
  }
 
    
  }






const styles = StyleSheet.create({
  main_container: {
    flex: 1,
   justifyContent: 'center',
   paddingTop:30,
   margin: 5
  },
});

const mapStateToProps = (state) => {
  return {
    recipes : state.setRecipes.recipes
  }
}
export default connect(mapStateToProps)(Home)