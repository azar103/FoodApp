import { createStore, combineReducers } from "redux"
import setRecipes from "./Reducers/recipesReducer"
import setCategory from './Reducers/categoryReducer'


export default createStore(combineReducers({setRecipes, setCategory}))