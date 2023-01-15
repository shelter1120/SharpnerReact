import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import Card from "../UI/Card";

export const ExpenseList = (props) => {
   const [amount, setAmount] = useState(props.amount)
   const [title,setTitle] = useState(props.title)
  const ClickHandle= ()=>{
    setTitle('change')
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <ExpenseTitle title={title}/>
        </div>
        <div className="expense-item__price">{amount}</div>
        <button onClick={ClickHandle}>Change title</button>
        <button onClick={()=>setAmount('100$')}>Update amount</button>
      </Card>
    
  );
  
};
