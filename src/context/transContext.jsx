import { createContext } from "react";

const initialTransactions = [
  { amount: 500, desc: "Cash" },
  { amount: -250, desc: "Cash" },
  { amount: 100, desc: "Cash" },
];

export const TransactionContext = createContext(initialTransactions);
