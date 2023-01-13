import React from 'react'
import  './ExpenseList.css'


export const ExpenseList = (props) => {
    
  return (

    <div className="expense-item">
    
       <div>{props.date}</div>
       <div className="expense-item__description">
       <h3>{props.title}</h3>
       <div className="expense-item__price">{props.amount}</div>
       </div>
</div>

  )
}
