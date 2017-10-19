
const counter = (state=0, action) => {
  switch(action.type) {
    case 'ADD': 
      console.log("add",state)
       return state+1;
    case 'DEC': 
    console.log("dec",state)    
      return state-1;
    case 'RESET': 
    console.log("reset",state)    
      return 0;
    default:  return state;
  }
}
export default counter
