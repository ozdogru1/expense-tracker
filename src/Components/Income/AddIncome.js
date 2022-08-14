import React, { useState } from "react";
import Button from "../../UI/Button";
import Toast from "../../UI/Toast";
import { input } from "../../UI/classname";
const AddIncome = ({ addIncomeListHandler }) => {
  const [error, setError] = useState();
  const [income, setIncome] = useState({
    type: "",
    amount: "",
    date: "",
  });
  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value});
  };

  const addIncomeHandler = (e) => {
    e.preventDefault();
    if (income.type.trim().length === 0 || income.date.trim().length === 0) {
      setError({
        message: "plase dont enter a null value ",
      });
      return;
    }
    if (Number(income.amount < 0)) {
      setError({
        message: "amount is cannot be less than 0",
      });
      return;
    }
    
    addIncomeListHandler(income.type, income.amount, income.date);

    
    setIncome({ type: "", amount: "", date: "" });
    
  };
   
  console.log(income);

  return (
    <div>
      <form onSubmit={addIncomeHandler}>
        <div className="flex ">
          <select
            name="type"
            value={income.type}
            onChange={handleChange}
            className={input}
          >
            <option selected>Choose a Income Type</option>
            <option>E-commerce</option>
            <option>Retail sale</option>
            <option>Monthly rental income</option>
            <option>fast production</option>
          </select>
          <input
            name="amount"
            value={income.amount}
            onChange={handleChange}
            placeholder="Enter a Income Amount"
            type="number"
            className={input}
          />
          <input
            name="date"
            value={income.date}
            onChange={handleChange}
            placeholder="Enter a Income Amount"
            type="date"
            className={input}
          />
        </div>
        <div className=" m-3">
          <Button
            type="submit"
            styles={
              "w-full drop-shadow-xl drop-shadow-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            }
          >
            Add Income
          </Button>
          <br />
          <br />
          {error && (
            <Toast setError={setError} error={error} message={error.message} />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddIncome;
