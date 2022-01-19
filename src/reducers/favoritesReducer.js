import movies from "../data";
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions'
const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {

        case TOGGLE_FAVORITES:
            return {
                displayFavorites: !action.payload
            }
        case ADD_FAVORITE: 
            return {
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE: 
            return {
                favorites: state.favorites.filter(item => item.id !== action.payload)
            }
        default: 
            return state;
    }
}

export default favoritesReducer;