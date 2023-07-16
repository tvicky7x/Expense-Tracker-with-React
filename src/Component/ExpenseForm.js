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
  function clearValue() {
    let form = document.querySelector("form");
    form.reset();
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
      <div className="container-fluid mt-3">
        <div className="row column-gap-2">
          <div className="col p-0 d-grid">
            <button className="btn btn-dark btn-sm fw-semibold" type="submit">
              Add
            </button>
          </div>
          <div className="col-2 p-0 d-grid">
            <button
              className="btn btn-danger btn-sm fw-semibold"
              onClick={clearValue}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
