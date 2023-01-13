import logo from "./logo.svg";
import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function App() {
  const expense = [
    { date: 2023, title: "food", amount: "29$" },
    { date: 2024, title: "gym", amount: "27$" },
    { date: 2025, title: "shakes", amount: "29$" },
    { date: 2026, title: "cafe", amount: "23$" },
    { date: 2027, title: "food", amount: "30$" },
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
