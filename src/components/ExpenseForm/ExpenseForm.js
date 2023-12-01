import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [inputs, setInputs] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const onTitleChangeHandler = (e) => {
        setInputs({
            ...inputs,
            title: e.target.value
        })
    }

    const onDateChangeHandler = (e) => {
        setInputs({
            ...inputs,
            date: e.target.value
        })
    }

    const onAmountChangeHandler = (e) => {
        setInputs({
            ...inputs,
            amount: e.target.value
        })
    }
    console.log(inputs)

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
