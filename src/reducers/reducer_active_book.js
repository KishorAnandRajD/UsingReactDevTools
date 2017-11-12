
// This REDUCER is for acting on an Action/Event
// Any created Actions is available to all Reducers
// It listens for any ACTION values and returns some value(custom value or action payload value)

// State argument is not application state, only the state this reducer is responsible for
// state value should not be returned as undefined. So initialize with null
export default function(state=null,action){
  //  state+=1
  switch(action.type){ // Listen for action.type value
    case 'BOOK_SELECTED':
      return action.payload; // Return the selected book which is assigned to the payload prop of the action
      break; // In case there are multiple cases to skip the rest of them
  }
  // IF no action is done, return null. This happens during first load(initialization) when none of the books are selected
  return state;
}
