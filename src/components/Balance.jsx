import React from "react";

export const Balance = ({ getIncome, getExpense }) => {
  return (
    <div>
      <h3>
        <span className="text-capitalize   myFont">your balance</span> <br />{" "}
        <span class="text-dark myFont3">${getIncome + getExpense}</span>
      </h3>
    </div>
  );
};
