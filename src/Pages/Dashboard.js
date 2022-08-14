import React from 'react'
import Donut from '../Chart/Donut'
import TotalCountBox from '../UI/TotalBox'
 
const Dashboard = ({incomeTotal,expenseTotal,total}) => {
  return (
    <div className=' flex flex-col items-center'>
      <div className='flex justify-between mt-5 mb-5    '>
      <TotalCountBox
              title=" Income"
              count={incomeTotal}
              ml={false}
              color="blue"
            />
            <TotalCountBox
              title=" Expense"
              count={expenseTotal}
              ml={true}
              color="red"
            />
            <TotalCountBox
              title="Balance"
              count={total}
              ml={true}
              color="green"
            />
        </div> 
      <Donut total={total} incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      
      <div className='mt-12'>Total Balance : {total} $</div>
     </div>
  )
}

export default Dashboard