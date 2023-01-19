import React ,{useState}from "react";
import ExpenseForm from "./ExpenseForm";

const MainExpenseForm = (props) => {

 const [isediting,setIsediting]= useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("hi" + newExpenseData);
    props.onAddExpense(newExpenseData);
    setIsediting(false)
  };

  const startEditingHandler = ()=>{
    setIsediting(true)
  }
  const stopEditingHandler = ()=>{
    setIsediting(false)
  }

  return (
    <div>
       {!isediting && <button onClick={startEditingHandler}>Add an expense</button>} 

{ isediting && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEvent={stopEditingHandler}/> )}    </div>
  );
};

export default MainExpenseForm;
