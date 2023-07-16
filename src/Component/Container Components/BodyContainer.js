import "./BodyContainer.css";

function BodyContainer(props) {
  return (
    <div className="container text-center size mb-5">{props.children}</div>
  );
}

export default BodyContainer;
