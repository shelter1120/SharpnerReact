import logo from "./logo.svg";
import "./App.css";
import { ExpenseList } from "./components/expense/ExpenseList";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function App() {
  const expense = [
    { date: new Date(2023,7,14), title: "food", amount: "29$" },
    { date: new Date(2024,8,13), title: "gym", amount: "27$" },
    { date: new Date(2025,9,13), title: "shakes", amount: "29$" },
    { date: new Date(2026,10,15), title: "cafe", amount: "23$" },
    { date: new Date(2025,12,17), title: "food", amount: "30$" },
  ];

  return (
    <div>
      <h1>Expense items</h1>

      {
      expense.map((key) => (
        <ExpenseList date={key.date} title={key.title} amount={key.amount} />
      ))
      }
      {/* <ExpenseList date={expense[1].date} title={expense[1].title} amount={expense[1].amount} />  */}
    </div>
  );
}

export default App;
