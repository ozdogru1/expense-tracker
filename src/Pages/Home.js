import React from "react";
import Expense from "../Components/Expense/Expense";
import Income from "../Components/Income/Income";

const Home = ({
  incomeList,
  expenseList,
  expenseDeleteHandler,
  incomeDeleteHandler,
  addIncomeListHandler,
  addExpenseHandler,
  total,
  incomeTotal,
  expenseTotal,
}) => {
  return (
    <div className="w-full  bg-[#1e293b]		">
      <div className="flex justify-center h-12 p-12 text-cyan-50  	items-center	">
        <h1 className="text-white text-3xl	"> Balance : {total} $</h1>
      </div>
      <div className="sm:flex	flex justify-between px-8 cst-cont 	">
        <div
          style={{ width: "49%" }}
          className=" w-5/12 mt-5   rounded"
        >
          <Income
            incomeTotal={incomeTotal}
            incomeDeleteHandler={incomeDeleteHandler}
            incomeList={incomeList}
            addIncomeListHandler={addIncomeListHandler}
          />
        </div>
        <div
          style={{ width: "49%" }}
          className="w-5/12 mt-5 "
        >
          <Expense
            expenseTotal={expenseTotal}
            expenseDeleteHandler={expenseDeleteHandler}
            expenseList={expenseList}
            addExpenseHandler={addExpenseHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
