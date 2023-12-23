import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initTransactionList = []

class MoneyManager extends Component {
  state = {
    amount: 0,
    titleText: '',
    optionId: transactionTypeOptions[0].optionId,
    TransactionList: initTransactionList,
  }

  getExpenses = () => {
    const {TransactionList} = this.state

    let expenses = 0

    TransactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenses += eachTransaction.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {TransactionList} = this.state

    let income = 0

    TransactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        income += eachTransaction.amount
      }
    })

    return income
  }

  deleteFunction = id => {
    const {TransactionList} = this.state
    const updateList = TransactionList.filter(eachItems => id !== eachItems.id)
    this.setState({
      TransactionList: updateList,
    })
  }

  onChangeTitle = event => {
    this.setState({titleText: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  addMoneyButton = event => {
    event.preventDefault()

    const {amount, titleText, optionId} = this.state

    const typeOfText = transactionTypeOptions.find(
      eachItem => eachItem.optionId === optionId,
    )

    const {displayText} = typeOfText

    const newCol = {
      id: uuidV4(),
      title: titleText,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newCol],
      // titleText: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {TransactionList} = this.state
    const ExpensesAmount = this.getExpenses()
    const IncomeAmount = this.getIncome()
    const BalanceAmount = IncomeAmount - ExpensesAmount

    return (
      <div className="main-con">
        <div className="dash-board-con">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="name-details">
            Welcome back to your{' '}
            <span className="span-money">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          ExpensesAmount={ExpensesAmount}
          IncomeAmount={IncomeAmount}
          BalanceAmount={BalanceAmount}
        />
        <div className="con">
          <div className="form-con">
            <form onSubmit={this.addMoneyButton} className="form-cls">
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                onChange={this.onChangeTitle}
                type="text"
                placeholder="Title"
              />
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                onChange={this.onChangeAmount}
                type="text"
                placeholder="Amount"
              />
              <label htmlFor="option">Type</label>
              <select id="option" onChange={this.onChangeOption}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>

          <div className="history-con">
            <h1 className="history-heading">History</h1>

            <ul className="unOrder-list">
              <li className="table-header-con">
                <p className="table-header-cell">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {TransactionList.map(eachItems => (
                <TransactionItem
                  key={eachItems.id}
                  transactiondetails={eachItems}
                  deleteFunction={this.deleteFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
