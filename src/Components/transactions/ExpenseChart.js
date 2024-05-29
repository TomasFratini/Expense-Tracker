import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../../Context/GloblalState'



const ExpenseChart = () => {

  const {transactions} = useGlobalState()

  const totalIncome = transactions.filter(transaction =>
  transaction.amount > 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense = transactions.filter(transaction =>
  transaction.amount < 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  
  const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  if (totalIncome === 0 && totalExpense ===0) {
    return (
      <div className='p-4 my-2'>
        <div className='h-full flex items-center justify-center w-full flex-col'>
          <h1 className='text-3xl font-bold my-2'>No data yet</h1>
        </div>
      </div>
    )
  }
  
  return (
    <div className="">
        <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentage },
          { x: "Incomes", y: totalIncomePercentage },
        ]}
        animate ={{
          duration: 200
        }}
        labels= {({datum}) => `${datum.y}%`}
        labelComponent={<VictoryLabel
          angle={45}
          style={{
            fill: "white"
          }
          }
        />}
      /> 
    </div>
  )
}

export default ExpenseChart