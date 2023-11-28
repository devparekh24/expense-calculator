// import ExpenseItem from "../ExpenseItem/ExpenseItem";
// import './Expense.css'

// export default function Expense() {
//     const data = [
//         {
//             date: new Date(2020, 10, 5),
//             title: 'BIKE EMI',
//             amount: 522.45
//         },
//         {
//             date: new Date(2020, 5, 8),
//             title: 'TV',
//             amount: 724.88
//         },
//         {
//             date: new Date(2020, 12, 10),
//             title: 'PHONE',
//             amount: 522.45
//         },
//         {
//             date: new Date(2020, 12, 24),
//             title: 'B-DAY PARTY',
//             amount: 300
//         }
//     ]
//     return (
//         data.map(eachItem => {
//             return <ExpenseItem date={eachItem.date.toISOString()} title={eachItem.title} amount={eachItem.amount} />
//         })
//     );
// }