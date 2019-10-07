import React from 'react'
import { StyleSheet, FlatList} from 'react-native'
import { connect } from 'react-redux'
import CategoryItem from './CategoryItem'
import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation'


class Categories extends React.Component {
   constructor(props) {
       super(props)

   }
   _loadFoods(){
      const action = {type: 'GET_RECIPES'}
      this.props.dispatch(action)
    } 
   componentDidMount() {
     this._loadFoods()     
    }
   
    render() {

        return(

            <FlatList 
                keyExtractor= {(item) => item.id.toString()}
                data = {this.props.categories}
                renderItem={({item}) => 
                <CategoryItem 
                    category={item}
                />}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
      recipes : state.setRecipes.recipes,
      categories: state.setCategory.categories
    }
  }
export default connect(mapStateToProps)(Categories)