import React from "react";

export const History = ({ transactions }) => {
  return (
    <div className="mt-3">
      <h3 className="pb-2 border-secondary myFont border-bottom">History</h3>
      <ul className="list-group mt-3">
        {transactions.map((transObj, ind) => {
          return (
            <li
              key={ind}
              className="list-group-item mb-2 d-flex justify-content-between align-items-center py-1 text-capitalize pr-0 pl-3  "
            >
              <span className="myFont6 font-weight-bold font-size">
                {transObj.desc}
              </span>
              <div>
                <span
                  className={`badge badge-${
                    transObj.amount > 0 ? "success " : "danger "
                  } badge-pill py-1 px-3 my-1 myFont2 font-size`}
                >
                  ${transObj.amount}
                </span>
                <span
                  className={`badge badge-${
                    transObj.amount > 0 ? "success" : "danger"
                  } mx-2 py-2 px-2 delete-btn`}
                >
                  x
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
