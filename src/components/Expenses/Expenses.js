import React, { useState } from 'react';

import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const updateExpenseYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} filterYear={updateExpenseYearHandler} />
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;