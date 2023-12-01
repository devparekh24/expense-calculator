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
    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                data.map(eachItem => {
                    return <ExpenseItem date={eachItem.date.toISOString()} title={eachItem.title} amount={eachItem.amount} />
                })
            }
        </div>
    );
}