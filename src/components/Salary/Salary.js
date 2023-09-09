import React, { Component } from 'react'
import Details from '../Details/Details'
import Transaction from '../Transaction/Transaction'
import { v4 } from 'uuid'
import './Salary.css'


const transactionOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class Salary extends Component {
   
  state = {
    transactionList:[],
    title: '',
    amount: '',
    optionId:transactionOptions[0].optionId,
  }

  deleteTrans = (id) => {
    const {transactionList}= this.state
    const updateTransaction = transactionList.filter(each =>
       id !== each.id,
      )

      this.setState({
        transactionList:updateTransaction,
      })
  }

  onAdd = event => {
    event.preventDefault()
    const {title,amount,optionId} = this.state
    const typeOption = transactionOptions.find(each =>
      each.optionId === optionId
    )

    const {displayText} = typeOption
     const newTransaction = {
      id:v4(),
      title:title,
      amount:parseInt(amount),
      type:displayText
     }    

     this.setState(prevState => ({
      transactionList:[...prevState.transactionList,newTransaction],
      title:'',
      amount:'',
      optionId:transactionOptions[0].optionId
     }))
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  getExpense = () => {
    const {transactionList} = this.state

    let expenses=0
    transactionList.forEach(each => {
      if(each.type === transactionOptions[1].displayText){
        expenses += each.amount
      }
    })
    return expenses
  }

  getIncome= () => {
    const {transactionList} = this.state
    let income=0
    transactionList.forEach(each => {
      if(each.type === transactionOptions[0].displayText){
        income += each.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balance = 0
    let income = 0
    let expense = 0

    transactionList.forEach(each => {
      if(each.type === transactionOptions[0].displayText){
         income += each.amount
      }else {
        expense += each.amount
      }
    })
     balance = income - expense

    return balance
  }


  render () {
   const {title,amount,optionId,transactionList} = this.state
   const balance = this.getBalance()
   const income = this.getIncome()
   const expense = this.getExpense()

  return (
    <div className='container'>
      <div className='card-container'>
        <div className='head-container'>
          <h1 className='heading'>Hi Aravind</h1>
          <p className='title'>Welcome back to your <span>Money Manager</span></p>
        </div>
        <Details
         balance={balance}
         income={income}
         expense={expense}
        />
        <div className='trans-container'>
          <form className="form" onSubmit={this.onAdd} >
            <h1 className='form-heading'>Add Transaction</h1>
            <label htmlFor='title' className='input-label'>TITLE</label>
            <input 
             type='text'
             className='input'
             value={title}
             onChange={this.onChangeTitleInput}
             placeholder='Title'
            />
            <label className='input-label' htmlFor='amount'>AMOUNT</label>
            <input 
             type='text'
             className='input'
             value={amount}
             onChange={this.onChangeAmountInput}
             placeholder='Amount'
            />
            <label className='input-label' htmlFor="select">
                TYPE
            </label>
            <select
              value={optionId}
              id='select'
              className='input'
              onChange={this.onChangeOption}
            >
             {transactionOptions.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
             ))}
            </select>
            <button className='button' type='submit'>Add</button>
          </form>
          <div className='history-transactions'>
            <h1 className='form-heading'>History</h1>
            <div className='transactions-table'>
              <ul className='transactions-table'>
                <li className='table-list'> 
                  <p className='table-list-head'>Title</p>
                  <p className='table-list-head'>Amount</p>
                  <p className='table-list-head'>Type</p>
                  <p className='table-list-head'>Delete</p>
                </li>
                  {transactionList.map(each => (
                    <Transaction
                      key={each.id}
                      transaction={each}
                      deleteTrans={this.deleteTrans}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
  }
}

export default Salary