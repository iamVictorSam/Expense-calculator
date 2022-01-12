import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <div>
        <ExpenseForm />
      </div>
    </div>
  );
};

export default NewExpense;
