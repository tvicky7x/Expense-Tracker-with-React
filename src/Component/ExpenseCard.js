import ExpenseList from "./ExpenseList";

function ExpenseCard() {
  return (
    <div class="card">
      <div class="card-header">
        <h2 class="fw-semibold">Expense Items</h2>
      </div>
      <ExpenseList></ExpenseList>
    </div>
  );
}

export default ExpenseCard;
