import './index.css'

const TransactionItem = props => {
  const {details, toDelete} = props
  const {id, title, amount, type} = details
  const isDeleted = () => {
    toDelete(id)
  }

  return (
    <li className="balanceList">
      <p className="hisTitle">{title}</p>
      <p className="hisAmount">Rs {amount}</p>
      <p className="hisType">{type}</p>
      <button
        className="delete"
        data-testid="delete"
        type="button"
        onClick={isDeleted}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default TransactionItem
