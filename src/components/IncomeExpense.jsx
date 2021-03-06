import React from "react";

export const IncomeExpense = ({ getExpense, getIncome }) => {
  return (
    <div>
      <div className="d-flex justify-content-around rounded mybg">
        <h3>
          <span className="text-capitalize  myFont2">income</span>
          <br />
          <span className="text-success myFont2">${getIncome}</span>
        </h3>
        <h3>
          <span className="text-capitalize myFont2">expense</span> <br />
          <span className="text-danger myFont2">${getExpense}</span>
        </h3>
      </div>
    </div>
  );
};
