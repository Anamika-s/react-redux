import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../Actions'
import   {bindActionCreators} from "redux"
export default function Dummy() {

  const amount = useSelector(state=> state.amount)
  const dispatch = useDispatch();
  const {WithdrawMoney, DepositMoney} = bindActionCreators(actionCreators, dispatch)
  // const WithDrawMoney = dispatch. 
  return (
    <div> Amount : {amount}  
    {/* <button onClick={()=>{dispatch(actionCreators.WithdrawMoney(100)) }}> Withdraw Money </button>
     

<button onClick={()=>{dispatch(actionCreators.DepositMoney(100)) }}> Deposit Money </button> */}

  <button onClick={()=>WithdrawMoney(100)}> Withdraw Money </button>
     

<button onClick={()=> DepositMoney(100)}> Deposit Money </button>  
</div>
  )
}
