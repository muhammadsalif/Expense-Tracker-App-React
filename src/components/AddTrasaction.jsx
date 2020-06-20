import React from "react";

export const AddTrasaction = ({
  handleAddition,
  newDesc,
  setDesc,
  newAmount,
  setAmount,
}) => {
  return (
    <div>
      <h3>Add new Transaction</h3>
      <hr></hr>

      <form onSubmit={handleAddition}>
        <div className="form-group">
          <label className="w-100">
            Enter description
            <input
              value={newDesc}
              className="form-control"
              htmlFor="text"
              placeholder="Enter Text..."
              required
              onChange={(e) => setDesc(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="form-group ">
          <label className="w-100">
            enter Amount
            <input
              value={newAmount}
              className="form-control "
              htmlFor="amount"
              placeholder="Enter Amount..."
              required
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </label>
        </div>
        <span className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-warning text-capitalize myFont font-size px-5 py-2 "
          >
            {" "}
            Add Transaction{" "}
          </button>
        </span>
      </form>
    </div>
  );
};
