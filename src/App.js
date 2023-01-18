import logo from "./logo.svg";
import "./App.css";
import { ExpenseList } from "./components/expense/ExpenseList";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import MainExpenseForm from "./components/ExpenseForm/MainExpenseForm";
import { useState } from "react";
import ExpenseFilter from "./components/expense/ExpenseFilter";

const dummyExpense = [
  { date: new Date(2023, 7, 14), title: "food", amount: "29$" },
  { date: new Date(2024, 8, 13), title: "gym", amount: "27$" },
  { date: new Date(2025, 9, 13), title: "shakes", amount: "29$" },
  { date: new Date(2026, 10, 15), title: "cafe", amount: "23$" },
  { date: new Date(2025, 12, 17), title: "food", amount: "30$" },
];

function App() {
  const [dynamicExpense, setdynamicExpense] = useState(dummyExpense);//ask why useState used dummyExpense
  
  // console.log(dynamicExpense);
  const [filteredYear, setFilteredYear] = useState("2022");

  const addExpenseHandler = (expense) => {
    // console.log('from app.js')
    // console.log(expense)
    setdynamicExpense([expense, ...dynamicExpense]);
    console.log(expense);
  };

 const filterChangeHandler = (selctedYear) => {
     setFilteredYear(selctedYear);
  };
  return (
    <div>
      <h1>Expense items</h1>

      {/* <ExpenseForm /> */}
      <MainExpenseForm onAddExpense={addExpenseHandler} />

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
       
    {
    dynamicExpense.map((key) => (
      
        <ExpenseList 
        key={Math.random()}
          date={key.date}
          title={key.title}
          amount={key.amount}
        />
      ))}
      {/* <ExpenseList date={expense[1].date} title={expense[1].title} amount={expense[1].amount} />  */}
    </div>
  );
}

export default App;
