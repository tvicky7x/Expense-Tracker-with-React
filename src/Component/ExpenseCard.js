import ExpenseList from "./ExpenseList";
import ExpenseObject from "./ExpenseObject";

function ExpenseCard() {
  return (
    <div className="card mt-4">
      <div className="card-header text-bg-dark">
        <h2 className="fw-semibold">
          Expense Items <i class="bi bi-card-list"></i>
        </h2>
      </div>
      <div className="card-body p-0">
        <ul className="list-group rounded-top-0">
          {ExpenseObject.map((objectItem) => {
            return <ExpenseList data={objectItem}></ExpenseList>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExpenseCard;
