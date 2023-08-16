import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{year}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
    </div>
  );
};

export default ExpenseDate;
