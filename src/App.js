import React, { useState } from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/ExpenseForm/NewExpense'
import data from './data.json'

function App() {
  console.log(data)
  const [expenses, setExpenses] = useState(data)

  const AddExpenseDataHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />
      <Expense data={expenses} />
    </div>
  );
}

export default App;
