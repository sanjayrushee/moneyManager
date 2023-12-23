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
          <p className="text-para">Your Balance</p>
          <p className="num-para" data-testid="balanceAmount">
            RS {BalanceAmount}
          </p>
        </div>
      </div>
      <div className="income-con amount-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="text">
          <p className="text-para">Your Income</p>
          <p className="num-para" data-testid="incomeAmount">
            RS {IncomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-con amount-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="text">
          <p className="text-para">Your Expenses</p>
          <p className="num-para" data-testid="expensesAmount">
            RS {ExpensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
