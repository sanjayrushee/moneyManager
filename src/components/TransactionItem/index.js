import './index.css'

const TransactionItem = props => {
  const {transactiondetails, deleteFunction} = props
  const {title, amount, type, id} = transactiondetails

  const onClickDeleteFuction = () => {
    deleteFunction(id)
  }

  return (
    <div className="list-con">
      <hr className="hr-class" />

      <li className="list">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <div>
          <button type="button" onClick={onClickDeleteFuction}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete-btn"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default TransactionItem
