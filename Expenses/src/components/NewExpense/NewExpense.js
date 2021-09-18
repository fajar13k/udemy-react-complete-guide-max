import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formStatus, setFormStatus] = useState(true);

  const formHandler = () => {
    setFormStatus(!formStatus);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormStatus(!formStatus);
  };

  return (
    <div className="new-expense">
      {formStatus ? (
        <button type="button" onClick={formHandler}>
          Add new expenses
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={formHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
