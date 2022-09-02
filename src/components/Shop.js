import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators }  from '../Actions/index'
export default function Shop() {
  const dispatch= useDispatch();
  const {DepositMoney, WithdrawMoney} = bindActionCreators(actionCreators,dispatch);

  const amount = useSelector(state => state.amount)
   console.log("Amount is " + amount)
  return (
    <div> Shop  
      <h1> Amount ======   {amount} </h1> 
      {/* <button onClick={dispatch(actionCreators.WithdrawMoney(100))}>  Withdraw  </button> */}

 <button onClick={()=> {dispatch(actionCreators.WithdrawMoney(100))}} className='btn btn-primary'> Withdraw  </button>  
      
 <button onClick={()=> {dispatch(actionCreators.DepositMoney(100))}} className='btn btn-primary'> Deposit  </button>  
    </div>
  )
}
