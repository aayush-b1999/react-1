import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  }

  //Other way of doing it
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });
  //   function titleChangeHandler(event) {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredTitle: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //     // console.log(event.target.value);
  //   }
  //   function amountChangeHandler(event) {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredAmount: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value };
  //     });
  //     // console.log(event.target.value);
  //   }
  //   function dateChangeHandler(event) {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredDate: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: event.target.value };
  //     });
  //     // console.log(event.target.value);
  //   }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.triggerButton}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
