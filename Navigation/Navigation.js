import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react'
import {Image, StyleSheet} from 'react-native'
import Home from '../components/Home'
import FoodDetail from '../components/FoodDetail'
import Ingredients from "../components/Ingredients"
import Categories from "../components/Categories"
import Search from '../components/Search'


const FoodsStackNavigator = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home'
        }
    },
    FoodDetail:{
        screen: FoodDetail,
        navigationOptions:{
            title: 'Recipe'
        }
    },
    Ingredients: {
        screen: Ingredients,
        navigationOptions: {
            title: 'Ingredients'
        }
    },
    
})

const CategoriesStackNavigator = createStackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: {
            title: 'Categories'
        }
    }
})

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    }
})

const bottomTabNavigator = createBottomTabNavigator({
   Home: {
       screen: FoodsStackNavigator,
     navigationOptions: {
        tabBarIcon: () => {
            return(
                <Image 
                   source={require('../Images/ic_home.png')}
                   style = {styles.icon_style}
                />
            )
        }
    }
   }
  ,
   Categories: {
    screen: CategoriesStackNavigator,
    navigationOptions: {
        tabBarIcon: () => {
            return(
             <Image 
             source={require('../Images/ic_categories.png')}
             style = {styles.icon_style}
          />
            )
        }
    }
   }
 ,

   Search: {
       screen: SearchStackNavigator,
       navigationOptions: {
        tabBarIcon: () => {
         return(
             <Image 
             source={require('../Images/ic_search.png')}
             style = {styles.icon_style}
          />
            )
        }
    }
   }
  

},
{
    tabBarOptions: {
        activeBackgroundColor:'#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showIcon: true,
        showLabel: false
    }
}
)

const styles = StyleSheet.create({
    icon_style: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(bottomTabNavigator)