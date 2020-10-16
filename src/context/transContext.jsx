import React, { createContext, useReducer } from "react";
import TransactionReducer from "../reducer/transReducer";

const initialTransactions = [
  { transId: 1, amount: 500, desc: "Cash" },
  { transId: 2, amount: -300, desc: "Book" },
  // { amount: 100, desc: "Cash" },
];

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }

  function delTransaction(transObj) {
    dispatch({
      type: "DEL_TRANSACTION",
      payload: {
        transId: transObj.transId,
      },
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
        delTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
