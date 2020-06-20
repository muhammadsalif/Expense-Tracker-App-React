import React from "react";

export const AddTrasaction = ({
  handleAddition,
  newDesc,
  setDesc,
  newAmount,
  setAmount,
}) => {
  return (
    <div className="mt-2">
      <h3 className="border-bottom border-secondary pb-2 text-capitalize myFont">
        Add new Transaction
      </h3>

      <form onSubmit={handleAddition}>
        <div className="form-group">
          <label className="w-100 text-capitalize myFont2 font-size">
            Enter description
            <input
              value={newDesc}
              className="form-control text-capitalize myFont6 font-size font-weight-bold"
              htmlFor="text"
              placeholder="Enter Text..."
              required
              onChange={(e) => setDesc(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="form-group ">
          <label className="w-100 text-capitalize myFont2 font-size">
            enter Amount
            <input
              value={newAmount}
              className="form-control text-capitalize myFont6 font-size font-weight-bold"
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
