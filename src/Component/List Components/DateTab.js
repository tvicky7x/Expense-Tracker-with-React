import "./DateTab.css";

function DateTab(props) {
  const date = new Date(props.date).toLocaleString("default", {
    day: "numeric",
  });
  const month = new Date(props.date).toLocaleString("default", {
    month: "long",
  });
  const year = new Date(props.date).getFullYear().toString();
  return (
    <div className="btn btn-dark btn-sm float-start fw-semibold min-size button">
      <div className="fs-6 fw-semibold">{month}</div>
      <div className="fw-light neg-margin">{year}</div>
      <div className="fs-5">{date}</div>
    </div>
  );
}

export default DateTab;
