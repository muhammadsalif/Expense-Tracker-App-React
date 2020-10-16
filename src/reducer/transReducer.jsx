const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [action.payload, ...state];
    }
    case "DEL_TRANSACTION": {
      return state.filter((obj) => obj.transId !== action.payload.transId);
    }
    default:
      return state;
  }
};

export default TransactionReducer;
