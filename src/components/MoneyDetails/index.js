import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <ul className="moneyCon">
      <li className="list1">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="balance">
          <p className="Para">Your Balance</p>
          <p className="Money" data-testid="balanceAmount">
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </li>
      <li className="list2">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="balance">
          <p className="Para">Your Income</p>
          <p className="Money" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="list3">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="balance">
          <p className="Para">Your Expenses</p>
          <p className="Money" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
