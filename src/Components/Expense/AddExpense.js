import React, { useState } from "react";
import Button from "../../UI/Button";
import Toast from "../../UI/Toast";
import {input} from "../../UI/classname"

// import useInput from "../../hooks/useInput";

const AddExpense = ({ addExpenseHandler }) => {
  const [error, setError] = useState();

  const [expense, setExpense] = useState({
    type: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const submitExpense = (e) => {
    e.preventDefault();
    if (expense.type.trim().length === 0 || expense.date.trim().length === 0 || expense.amount.trim().length === 0) {
      setError({
        message: "plase dont enter a null value ",
      });
      return;
    }
    if (Number(expense.amount < 0)) {
      setError({
        message: "amount is cannot be less than 0",
      });
      return;
    }

    addExpenseHandler(expense.type, expense.amount, expense.date);

    setExpense({ type: "", amount: "", date: "" });
  };

  return (
    <div>
      <form onSubmit={submitExpense}>
        <div className="flex ">
          <select
            name="type"
            value={expense.type}
            onChange={handleChange}
            className={input}
          >
            <option selected>Choose a Expense Type</option>
            <option>Staff salary</option>
            <option>Office rent</option>
            <option>Meal fees</option>
            <option>invoice</option>
          </select>
          <input
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            placeholder="Enter a Expense Amount"
            type="number"
            className={input}
          />

          <input
            name="date"
            value={expense.date}
            onChange={handleChange}
            type="date"
            className={input}
          />
        </div>
        <div className=" m-3">
          <Button
            type="submit"
            styles={
              " w-full drop-shadow-xl  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            }
          >
            Add Expense
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

export default AddExpense;
