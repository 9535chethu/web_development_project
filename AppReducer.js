const AppReducer = (state, action) => {
    switch(action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
        }

        case "ADD_TRANSACTION":
          return {
            ...state,
            transactions: [action.payload, ...state.transactions]
          }
      // Define your action cases here
      default:
        return state;
    }
  }

  export default AppReducer;
  

  