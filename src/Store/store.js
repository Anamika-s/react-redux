import {applyMiddleware, legacy_createStore} from "redux";
  import reducers from '../Reducers/CombineReducers'
import thunk from "redux-thunk";
 const store = legacy_createStore(reducers, {} , applyMiddleware(thunk));
 console.log("State is "  + store.getState())
 export default store;

