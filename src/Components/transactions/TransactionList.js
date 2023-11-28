import React from 'react'
import { useGlobalState } from '../../Context/GloblalState'
import {TransactionItem} from './TransactionItem'

const TransactionList = () => {

    const {transactions}= useGlobalState()


  return (
    <>
        <h3 className='text-slate-300 text-xl font-bold'>History </h3>
        <ul>
            {transactions.map(transaction => (
            <TransactionItem transaction={transaction} key={transaction.id}/>  
            ))}

        </ul>
    </>
  )
}

export default TransactionList