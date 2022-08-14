import React from "react";
import Card from "../../UI/Card";
import AddIncome from "./AddIncome";
import IncomeList from "./IncomeList";
const Income = ({
  addIncomeListHandler,
  incomeList,
  incomeDeleteHandler,
  incomeTotal,
}) => {
  return (
    <>
      <AddIncome addIncomeListHandler={addIncomeListHandler} />
      <Card customize={" bg-green-500 text-white"}>
        <p>total income : {incomeTotal} $ </p>
      </Card>

      <IncomeList
        incomeDeleteHandler={incomeDeleteHandler}
        incomeList={incomeList}
      />
    </>
  );
};

export default Income;
