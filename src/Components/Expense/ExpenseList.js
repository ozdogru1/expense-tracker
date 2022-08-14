import React from 'react'
import Button from '../../UI/Button'
import Card from '../../UI/Card'
import { BsFillTrashFill } from "react-icons/bs";

const ExpenseList = ({expenseList,expenseDeleteHandler}) => {
  return (
    <>
{
  expenseList.map((item)=>(
     <Card key={item.id}>
      <h1>{item.type}</h1>
      <p> {item.amount}</p>
      <p>{item.date}</p>
      <Button
      onClick={()=>expenseDeleteHandler(item.id)}
      styles={" w-1/4 text-white bg-red-700	 hover:bg-red-800  flex justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}
      ><BsFillTrashFill/></Button>
      </Card>
  ))
}
     
    </>
  )
}

export default ExpenseList