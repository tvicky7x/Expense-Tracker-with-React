function ExpenseForm(props) {
  function newExpense(e) {
    e.preventDefault();
    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let date = document.getElementById("expenseDate").value;
    let expenseObject = {
      expenseName: name,
      expenseAmount: Number(amount),
      expenseDate: new Date(date),
    };
    props.add(expenseObject);
  }
  return (
    <form action="#" onSubmit={newExpense}>
      <div>
        <label htmlFor="expenseName" className="form-label">
          Expense Name
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          className="form-control"
          required
        />
      </div>
      <div>
        <label htmlFor="expenseAmount" className="form-label">
          Expense Amount
        </label>
        <input
          type="number"
          name="expenseAmount"
          id="expenseAmount"
          className="form-control"
          required
        />
      </div>
      <div>
        <label htmlFor="expenseDate" className="form-label">
          Expense Date
        </label>
        <input
          type="date"
          name="expenseDate"
          id="expenseDate"
          className="form-control"
          required
        />
      </div>
      <div className="d-grid mt-3">
        <button className="b btn btn-dark btn-sm fw-semibold" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
