import React from 'react';
import Expense from './components/Expense/Expense';

function App() {
  const data = [
    {
      date: new Date(2020, 10, 5),
      title: 'BIKE EMI',
      amount: 522.45
    },
    {
      date: new Date(2020, 5, 8),
      title: 'TV',
      amount: 724.88
    },
    {
      date: new Date(2020, 12, 10),
      title: 'PHONE',
      amount: 522.45
    },
    {
      date: new Date(2020, 12, 24),
      title: 'B-DAY PARTY',
      amount: 300
    }
  ]
  return (
    <Expense data={data} />
  );
}

export default App;
