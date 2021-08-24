import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFiter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [year, setYear] = useState("2019");
  function yearSelector(yearRecieved) {
    setYear(yearRecieved);
  }
  const displayExpenses = props.expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === year) return true;
    return false;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onYearSelection={yearSelector}
      ></ExpensesFilter>
      <ExpenseChart expenses={displayExpenses} />
      <ExpenseList expenses={displayExpenses} />
    </Card>
  );
}

export default Expenses;
