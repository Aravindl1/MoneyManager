import React from 'react'
import './Details.css'


const Details = (props) => {
   const {balance,income,expense} = props

  return (
    <div className='details-container'>
      <div className='money-container'>
        <img 
          src='https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
          alt='balance'
          className='image'
        />
        <div>
          <p className='text'>Your Balance</p>
          <p className='money'>Rs {balance}</p>
        </div>
      </div>
      <div className='money-container income'>
        <img 
          src='https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'
          alt='income'
          className='image'
        />
        <div >
          <p className='text'>Your Income</p>
          <p className='money'>Rs {income}</p>
        </div>
      </div>
      <div className='money-container expenses'>
        <img 
          src='https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'
          alt='expense'
          className='image'
        />
        <div >
          <p className='text'>Your Expenses</p>
          <p className='money'>Rs {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default Details