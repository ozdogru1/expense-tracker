import React from 'react'
import Button from '../../UI/Button'
import Card from '../../UI/Card'
import { BsFillTrashFill } from "react-icons/bs";

const IncomeList = ({incomeList,incomeDeleteHandler}) => {
  console.log(incomeList,"s");
  return (
    <div className='text-white'>
      {incomeList.map((income)=>(
        <Card key={income.id}>
      <h1>{income.type}</h1>
      <p> {income.amount} $ </p>
      <p>{income.date}</p>
      <Button
      onClick={()=>incomeDeleteHandler(income.id)}
      styles={" w-1/4 text-white bg-red-700	 hover:bg-red-800  flex justify-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}
      ><BsFillTrashFill/></Button>
      </Card> 
      ))}
     
    </div>
  )
}

export default IncomeList