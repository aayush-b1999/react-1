import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [buttonTrigger, setButtonTrigger] = useState(false);
  function saveNewExpense(expense) {
    const changed = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onProcessingExpense(changed);
    setButtonTrigger(false);
  }
  function buttonTriggerHandler(event) {
    setButtonTrigger(true);
  }
  return (
    <div className="new-expense">
      {buttonTrigger === false && (
        <button onClick={buttonTriggerHandler}>Add new Expense</button>
      )}
      {buttonTrigger === true && (
        <ExpenseForm
          triggerButton={buttonTriggerHandler}
          onSaveExpense={saveNewExpense}
        />
      )}
    </div>
  );
}

export default NewExpense;
