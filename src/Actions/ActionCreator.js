export const WithdrawMoney = (amount)=>
{
  console.log("Amt is " + amount)
  return (dispatch) =>
  {
     
     dispatch({
      type:'withdraw',
      payload:amount
     })
  }
}


export const DepositMoney = (amount)=>
{
  return (dispatch) =>
  {
     dispatch({
      type:'deposit',
      payload:amount
     })
  }
}
