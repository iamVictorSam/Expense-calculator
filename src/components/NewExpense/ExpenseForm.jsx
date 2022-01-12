import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // second Approach
//   const [enteredInput, setEnteredInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    // N.b dont use this... might give you issues...
    // setEnteredInput({
    //     ...enteredInput,
    //     enteredTitle: event.target.value,
    // })
    // N.b use this instead(when ever ur current state depends on the previous state)
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const DateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: event.target.value,
    // });
    // setEnteredInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    //   });
  };

  const AmountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: event.target.value,
    // });
    // setEnteredInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value };
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),

    }
    console.log(expenseDate);

    // clearing inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
          value={enteredAmount}
          type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
          value={enteredDate}
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={DateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
