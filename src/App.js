import React, { useState, useEffect } from "react";
import Dashbord from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from "uuid";

 const App = () => {
  const [incomeList, setIncomeList] = useState(JSON.parse(localStorage.getItem("incomeList"))|| [] );
  const [expenseList, setExpenseList] = useState(JSON.parse(localStorage.getItem("expenseList"))|| []);

   const addExpenseHandler = (eType, eAmount, eDate) => {
    return setExpenseList([
      ...expenseList,
      { type: eType, amount: eAmount, date: eDate, id: uuidv4() },
    ]);
  };
 
  const addIncomeListHandler = (iType, iAmount, iDate) => {
    setIncomeList([
      ...incomeList,
      { type: iType, amount: iAmount, date: iDate, id: uuidv4() },
    ]);
  };


  useEffect(() => {
    localStorage.setItem("incomeList", JSON.stringify(incomeList));
  }, [incomeList]);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]);

  const incomeDeleteHandler = (id) => {
    const newIncomeList = incomeList.filter((item) => item.id !== id);
    setIncomeList(newIncomeList);
  };

  const expenseDeleteHandler = (id) => {
    const newExpenseList = expenseList.filter((item) => item.id !== id);
    setExpenseList(newExpenseList);
  };

  const incomeTotal = incomeList.reduce(
    (acc, val) => Number(acc) + Number(val.amount),
    0
  );
  const expenseTotal = expenseList.reduce(
    (acc, val) => Number(acc) + Number(val.amount),
    0
  );

  const total = Number(incomeTotal - expenseTotal);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashbord
              total={total}
              incomeTotal={incomeTotal}
              expenseTotal={expenseTotal}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              incomeList={incomeList}
              expenseList={expenseList}
              total={total}
              incomeTotal={incomeTotal}
              expenseTotal={expenseTotal}
              expenseDeleteHandler={expenseDeleteHandler}
              incomeDeleteHandler={incomeDeleteHandler}
              addIncomeListHandler={addIncomeListHandler}
              addExpenseHandler={addExpenseHandler}
              setIncomeList={setIncomeList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
