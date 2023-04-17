import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    list: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addHistory = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newHistory],
      title: '',
      amount: '',
      type: 'Income',
      totalIncome:
        prevState.totalIncome + (type === 'Income' && parseInt(amount)),
      totalExpenses:
        prevState.totalExpenses + (type === 'Expenses' && parseInt(amount)),
    }))
  }

  isDeleted = id => {
    const {list} = this.state
    const filteredList = list.filter(each => each.id !== id)
    const listAmount = list.find(each => each.id === id)
    this.setState(prevState => ({
      list: filteredList,
      totalIncome:
        prevState.totalIncome -
        (listAmount.type === 'Income' && parseInt(listAmount.amount)),
      totalExpenses:
        prevState.totalExpenses -
        (listAmount.type === 'Expenses' && parseInt(listAmount.amount)),
    }))
  }

  render() {
    const {title, list, amount, type, totalIncome, totalExpenses} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <div className="con">
          <form className="form" onSubmit={this.addHistory}>
            <h1 className="add">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              placeholder="TITLE"
              className="input"
              value={title}
              onChange={this.onChangeTitle}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              type="number"
              className="input"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <select
              id="type"
              className="select"
              value={type}
              onChange={this.onChangeType}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.displayText}>{each.displayText}</option>
              ))}
            </select>
            <button className="addButton" type="submit">
              Add
            </button>
          </form>
          <div className="con1">
            <h1 className="history">History</h1>
            <div className="historyCon">
              <p className="title">Title</p>
              <p className="amount">Amount</p>
              <p className="type">Type</p>
            </div>
            <ul className="unList">
              {list.map(each => (
                <TransactionItem
                  details={each}
                  key={each.type}
                  toDelete={this.isDeleted}
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
