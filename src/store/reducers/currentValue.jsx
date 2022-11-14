  const initialState = {
    value: 2000,
  }
  
  function currentValue(state = initialState, action) {
    switch(action.type) {
        case "SET_VALUE": 
            return { ...state, value: state.value};
        default: 
        return state;
    }
}  

export default currentValue;