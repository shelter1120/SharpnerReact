import React from "react";
import "./ExpenseList.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";

export const ExpenseList = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <ExpenseTitle title={props.title}/>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};
