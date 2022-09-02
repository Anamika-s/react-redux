import {combineReducers} from "redux"
import amountRedcuer from "./AmountReducer"

const reducers = combineReducers(
 {
  amount:amountRedcuer
 }
)


export default reducers;