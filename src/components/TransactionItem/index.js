import './index.css'

const TransactionItem = props => {
  const {transactiondetails} = props
  const {title, amount, type} = transactiondetails

  return (
    <div>
      <li>
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
      </li>
    </div>
  )
}

export default TransactionItem
