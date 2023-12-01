import React from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter({ selected, onChangeFilter }) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 25;

    const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

    const handleYearChange = (e) => {
        onChangeFilter(e.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selected} onChange={handleYearChange}>
                    {
                        years.map((year) => {
                            return <option key={year} value={year}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}
