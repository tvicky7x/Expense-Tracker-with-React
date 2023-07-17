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
    props.submit();
    props.add(expenseObject);
    e.target.reset();
  }
  function closeHandler() {
    props.submit();
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
        <div className="input-group mb-3">
          <span className="input-group-text">₹</span>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            className="form-control"
            min={1}
            required
          />
        </div>
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
        <div className="row gap-2">
          <button className="col btn btn-dark btn-sm fw-semibold" type="submit">
            Add
          </button>
          <button
            className="col-2 btn btn-danger btn-sm fw-semibold"
            onClick={closeHandler}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
