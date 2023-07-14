import DateTab from "./DateTab";

function ExpenseList(props) {
  const expenseName = props.data.expenseName;
  const expenseAmount = props.data.expenseAmount;
  const expenseDate = props.data.expenseDate;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between">
      <DateTab date={expenseDate}></DateTab>
      <h5 className="d-inline-block align-self-center me-auto ms-3">
        {expenseName}
      </h5>
      <button className="btn btn-sm btn-dark fw-semibold align-self-center button">
        ₹ {expenseAmount}
      </button>
    </li>
  );
}

export default ExpenseList;
