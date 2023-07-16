import "./DateTab.css";

function DateTab(props) {
  const date = props.date.toLocaleString("default", { day: "numeric" });
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="btn btn-dark btn-sm float-start fw-semibold min-size button">
      <div className="fs-6 fw-semibold">{month}</div>
      <div className="fw-light neg-margin">{year}</div>
      <div className="fs-5">{date}</div>
    </div>
  );
}

export default DateTab;
