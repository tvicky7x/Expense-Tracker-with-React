import React from "react";

function TotalExpense(props) {
  let sum = props.data.reduce((sum, item) => sum + item.expenseAmount, 0);

  return (
    <div className="text-bg-warning rounded-1 p-1 mt-3">
      <h4 className="m-0">Total Expense = ₹ {sum}</h4>
    </div>
  );
}

export default TotalExpense;
