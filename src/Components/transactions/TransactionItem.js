import React from 'react'
import { useGlobalState } from '../../Context/GloblalState'

export const TransactionItem = ({transaction}) => {
    
    const {deleteTransaction}= useGlobalState()


  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full
        flex justify-between items-center'>
        <p className='text-sm'>{transaction.description}</p>
        <div>
            <span>${transaction.amount}</span>
            <button className='bg-zinc-400 rounded-lg px-1 mx-1' onClick={() => {
                deleteTransaction(transaction.id)
            }}>X</button>
        </div>
    </li>
  )
}

export default TransactionItem