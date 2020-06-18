import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      {/* Header component start */}
      <h1 className="text-center">Expense Tracker</h1>
      {/* Header component End */}

      {/* Balance component start */}
      <h3>
        your Balances <br /> $260
      </h3>
      {/* Balance component End */}

      {/* Income expense component start */}
      <div className="d-flex justify-content-around border bg-white">
        <h3>
          income <br /> $260
        </h3>
        <h3>
          expense <br /> $260
        </h3>
      </div>

      {/* Income expense component end*/}

      {/* History  component start*/}
      <h3>History</h3>
      <hr></hr>
      <ul className="list-group border">
        <li className="list-group-item mb-2 d-flex justify-content-between align-items-center">
          <span>Cash</span>
          <span className="badge badge-primary badge-pill py-2 px-3">$500</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Cash</span>
          <span className="badge badge-danger badge-pill py-2 px-3">$500</span>
        </li>
      </ul>

      {/* History  component end*/}

      {/* Transaction  component start*/}
      <h3>Add new Transaction</h3>
      <hr></hr>

      <form>
        <div className="form-group">
          <label className="w-100">
            Text
            <input
              className="form-control"
              HtmlFor="text"
              placeholder="Enter Text..."
              required
            ></input>
          </label>
        </div>

        <div className="form-group ">
          <label className="w-100">
            Amount
            <input
              className="form-control "
              HtmlFor="amount"
              placeholder="Enter Amount..."
              required
            ></input>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          {" "}
          Add Transaction{" "}
        </button>
      </form>

      {/* Transaction  component end*/}
    </div>
  );
}

export default App;
