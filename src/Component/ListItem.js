import DateTab from "./DateTab";

function ListItem(props) {
  const classes = "list-group-item " + props.className;
  function clickHandler() {
    console.log("Delete!!!");
  }
  return (
    <li className={classes}>
      <DateTab date={props.data.expenseDate}></DateTab>
      <h5 className="d-inline-block align-self-center me-auto ms-3">
        {props.data.expenseName}
      </h5>
      <button className="btn btn-sm btn-dark fw-semibold align-self-center button">
        ₹ {props.data.expenseAmount}
      </button>
      <button
        className="btn align-self-center btn-sm btn-danger fw-semibold ms-2"
        onClick={clickHandler}
      >
        X
      </button>
    </li>
  );
}

export default ListItem;
