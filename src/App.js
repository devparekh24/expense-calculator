import React, { useState } from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/ExpenseForm/NewExpense'

const data = [
  {
    id:'ei1',
    date: new Date(2020, 10, 5),
    title: 'BIKE EMI',
    amount: 522.45
  },
  {
    id:'ei2',
    date: new Date(2020, 5, 8),
    title: 'TV',
    amount: 724.88
  },
  {
    id:'ei3',
    date: new Date(2020, 12, 10),
    title: 'PHONE',
    amount: 522.45
  },
  {
    id:'ei4',
    date: new Date(2020, 12, 24),
    title: 'B-DAY PARTY',
    amount: 300
  }
]

function App() {

  const [expenses, setExpenses] = useState(data)

  const AddExpenseDataHandler = (expenseData) => {
    setExpenses((prevExpenses)=>[expenseData, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
