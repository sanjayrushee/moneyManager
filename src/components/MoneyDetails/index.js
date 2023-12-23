import './index.css'

const MoneyDetails = props => {
  const {ExpensesAmount, IncomeAmount, BalanceAmount} = props

  return (
    <div className="main-bg">
      <div className="amount-con balance-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="text">
          <p>Your Balance</p>
          <p>{BalanceAmount}</p>
        </div>
      </div>
      <div className="amount-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div>
          <h1>Your Income</h1>
          <h1>{IncomeAmount}</h1>
        </div>
      </div>
      <div className="amount-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div>
          <h1>Your Expenses</h1>
          <h1>{ExpensesAmount}</h1>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
