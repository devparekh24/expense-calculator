import React, { useState } from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/ExpenseForm/NewExpense'
import data from './data.json'
import Footer from './components/Footer/Footer';

function App() {
  console.log(data)
  const [expenses, setExpenses] = useState(data)

  const AddExpenseDataHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses])
  }
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark" />
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />
      <Expense data={expenses} />
      <Footer />
    </div>
  );
}

export default App;
