import React, { useContext, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { TransactionContext } from "./context/transContext";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { AddTrasaction } from "./components/AddTrasaction";
import { History } from "./components/History";

function App() {
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (e) => {
    e.preventDefault();
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setDesc("");
    setAmount(0);
  };

  const getIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container py-3 my-4">
      <Header></Header>

      <Balance getIncome={getIncome()} getExpense={getExpense()}></Balance>

      <IncomeExpense
        getIncome={getIncome()}
        getExpense={getExpense()}
      ></IncomeExpense>

      <History transactions={transactions}></History>

      <AddTrasaction
        handleAddition={handleAddition}
        newDesc={newDesc}
        setDesc={setDesc}
        newAmount={newAmount}
        setAmount={setAmount}
      ></AddTrasaction>
    </div>
  );
}

export default App;
