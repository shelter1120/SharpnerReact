import React from "react";
import "./ExpenseList.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import Card from "../UI/Card";

export const ExpenseList = (props) => {
  const ClickHandle= ()=>{
    alert('clicked handle')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <ExpenseTitle title={props.title}/>
        </div>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={ClickHandle}>Delete</button>
      </Card>
    
  );
  
};
