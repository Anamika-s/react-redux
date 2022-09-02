const init=0;
const amountRedcuer = (state=init,
  action)=>
  {
    console.log("Type " + action.type)
 
    if(action.type==='withdraw')
    return state - action.payload;
    else if(action.type==='deposit')
    return state + action.payload;
    else 
    return state;
  }

  export default amountRedcuer;