import React from 'react'
import './Transaction.css'
import { MdDeleteOutline } from 'react-icons/md'

const Transaction = (props) => {

  const {transaction,deleteTrans} = props
  const {id,title,amount,type} = transaction

  const onDeleteTrans = () => {
    deleteTrans(id)
  }
  return (
    <li className='trans-list'>
      <p className='trans-title'>{title}</p>
      <p className='trans-title'>{amount}</p>
      <p className='trans-title'>{type}</p>
      <div className='delete-cont'>
        <button 
          type='button'
          className='delete-button'
          onClick={onDeleteTrans}
        >
        <MdDeleteOutline className='delete-icon '/>
        </button>
      </div>
    </li>
  )
}

export default Transaction