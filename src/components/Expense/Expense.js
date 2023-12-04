import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expense.css'

export default function Expense({ data }) {

    const [filteredYear, setFilteredYear] = useState()

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    console.log(filteredYear)

    let filteredExpensesByYear = data;


    if (filteredYear) {
        // Apply filter only if filteredYear is set
        filteredExpensesByYear = data.filter((expense) => {
            const expenseDate = new Date(expense.date);
            return !isNaN(expenseDate) && expenseDate.getFullYear().toString() === filteredYear;
        });
    }

    let expenseContentList = <p>No Expenses Found!</p>

    if (filteredExpensesByYear.length > 0) {
        expenseContentList = filteredExpensesByYear.map(eachItem => {
            return <ExpenseItem key={eachItem.id} date={eachItem.date} title={eachItem.title} amount={eachItem.amount} />
        })
    }

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContentList}
        </div>
    );
}