import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(false);
  const [date, setDate] = useState("");

  function getSubmitDetails(e) {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    //this is known as two way binding means after submiting input value remove old value.
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <div>
      <form onSubmit={getSubmitDetails}>
        <div>
          <label>Expense title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Expense Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Expense Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={props.onStopEvent}>Cancel</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
