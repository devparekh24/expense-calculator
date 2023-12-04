import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expense.css'

export default function Expense({ data }) {

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear())

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    console.log(filteredYear)

    const filteredExpensesByYear = data.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpensesByYear.length === 0 ? <p>No Expenses Found!</p> : filteredExpensesByYear.map(eachItem => {
                return <ExpenseItem key={eachItem.id} date={eachItem.date} title={eachItem.title} amount={eachItem.amount} />
            })}
        </div>
    );
}