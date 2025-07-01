import { combineReducers } from "redux";
import customizationReducer from "./action";
const reducer= combineReducers({
    customization: customizationReducer
});


export default reducer;