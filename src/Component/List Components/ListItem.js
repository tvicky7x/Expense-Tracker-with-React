import DateTab from "./DateTab";

function ListItem(props) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between">
      <DateTab date={props.data.expenseDate}></DateTab>
      <h5 className="d-inline-block align-self-center me-auto ms-3">
        {props.data.expenseName}
      </h5>
      <button className="btn btn-sm btn-dark fw-semibold align-self-center button">
        ₹ {props.data.expenseAmount}
      </button>
      {props.children}
    </li>
  );
}

export default ListItem;
