import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expense.css'

export default function Expense({ data }) {
    return (
        <div className='expenses'>
            {
                data.map(eachItem => {
                    return <ExpenseItem date={eachItem.date.toISOString()} title={eachItem.title} amount={eachItem.amount} />
                })
            }
        </div>
    );
}