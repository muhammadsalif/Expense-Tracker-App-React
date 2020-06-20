import React from "react";

export const History = ({ transactions }) => {
  return (
    <div class="mt-3">
      <h3 className="pb-2 border-secondary myFont border-bottom">History</h3>
      <ul className="list-group mt-3">
        {transactions.map((transObj, ind) => {
          return (
            <li
              key={ind}
              className="list-group-item mb-2 d-flex justify-content-between align-items-center py-1"
            >
              <span className="myFont font-size">{transObj.desc}</span>
              <span
                className={`badge badge-${
                  transObj.amount > 0 ? "primary " : "danger "
                } badge-pill py-1 px-3 my-1 myFont2 font-size`}
              >
                ${transObj.amount}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
