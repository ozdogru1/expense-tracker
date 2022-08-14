import React from "react";
import Card from "../../UI/Card";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
const Expense = ({
  addExpenseHandler,
  expenseDeleteHandler,
  expenseList,
  expenseTotal,
}) => {
  return (
    <>
      <AddExpense addExpenseHandler={addExpenseHandler} />
      <Card customize={"bg-red-500 text-white"}>
        <div className="">total expense : {expenseTotal} $</div>
      </Card>
      <ExpenseList
        expenseDeleteHandler={expenseDeleteHandler}
        expenseList={expenseList}
      />
    </>
  );
};

export default Expense;
