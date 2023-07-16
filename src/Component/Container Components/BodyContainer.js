import "./BodyContainer.css";

function BodyContainer(props) {
  return <div className="container text-center size">{props.children}</div>;
}

export default BodyContainer;
