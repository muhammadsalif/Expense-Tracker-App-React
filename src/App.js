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
  let { transactions, addTransaction ,delTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  let [transId,setTransId]=useState(0)

  const handleAddition = (e) => {
    e.preventDefault();
    setTransId(transId+1);
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
      transId:transId
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
    <div className="row">
      <div className="myCol mt-2 py-3 col-10 col-sm-7 col-md-6 col-lg-4 mx-auto">
        <Header></Header>

        <Balance getIncome={getIncome()} getExpense={getExpense()}></Balance>

        <IncomeExpense
          getIncome={getIncome()}
          getExpense={getExpense()}
        ></IncomeExpense>

        <History transactions={transactions} delTransaction={delTransaction}></History>

        <AddTrasaction
          handleAddition={handleAddition}
          newDesc={newDesc}
          setDesc={setDesc}
          newAmount={newAmount}
          setAmount={setAmount}
        ></AddTrasaction>
      </div>
    </div>
  );
}

export default App;
