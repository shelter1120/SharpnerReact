import React, { useState } from 'react'

const ExpenseForm = () => {
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState(false)
    const [date,setDate]=useState('')

     function getSubmitDetails(e){
        e.preventDefault()
       console.log(title,amount,date)
     }
  return (
    <div>
        <form onSubmit={getSubmitDetails}>
        <div>
        <label>Expense title:</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} ></input>
        </div>
        <div>
        <label>Expense Amount:</label>
        <input type="number" onChange={(e)=>setAmount(e.target.value)} ></input>
        </div>
        <div>
        <label>Expense Date:</label>
        <input type="date" onChange={(e)=>setDate(e.target.value)} ></input>
        </div>
        <button type='submit'>Submit</button>

     </form>

    </div>
  )
}

export default ExpenseForm