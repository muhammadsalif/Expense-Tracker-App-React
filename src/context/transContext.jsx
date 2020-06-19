import React, { createContext } from "react";
import TransactionReducer from "../reducer/transReducer";
import { useReducer } from "react";

const initialTransactions = [
  { amount: 500, desc: "Cash" },
  { amount: -250, desc: "Book" },
  { amount: 100, desc: "Cash" },
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

  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
