const TransactionReducer = (state, action) => {
  switch (aciton.type) {
    case "ADD": {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
};

export default TransactionReducer;
