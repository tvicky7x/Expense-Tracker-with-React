import React from "react";

function TotalExpense(props) {
  return (
    <div className="mt-3">
      <h5>Total Expense : {props.sum}</h5>
    </div>
  );
}

export default TotalExpense;
