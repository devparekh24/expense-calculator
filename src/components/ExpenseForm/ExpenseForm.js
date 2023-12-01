import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const onTitleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const onDateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const onAmountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    console.log(title, amount, date)
    
    return (
        <form >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={onTitleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={onDateChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={onAmountChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
