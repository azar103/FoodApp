
import foods from "../../Helpers/foodData"
const initialState = {
    recipes: foods
}
function setRecipes(state = initialState, action) {
    let nextState
      switch(action.type) {
          case 'GET_RECIPES':
               nextState = {
                   ...state,
                  recipes: [...state.recipes]
               }

          return nextState||state
          default:
              return state     
      }
}


export default setRecipes