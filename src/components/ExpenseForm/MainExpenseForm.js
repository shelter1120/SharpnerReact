import React from 'react';
import ExpenseForm from './ExpenseForm';

const MainExpenseForm = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const newExpenseData = {
     ...enteredExpenseData,
     id: Math.random().toString()
    }
    // console.log(newExpenseData)
    props.onAddExpense(newExpenseData)
  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default MainExpenseForm