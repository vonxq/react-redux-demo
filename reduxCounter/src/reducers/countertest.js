
const counter = (state=100, action) => {
  switch(action.type) {
    case 'ADD': 
      console.log("add test",state)
       return state+1;
    case 'DEC': 
    console.log("dec test",state)    
      return state-1;
    case 'RESET': 
    console.log("reset test",state)    
      return 0;
    default:  return state;
  }
}
export default counter
