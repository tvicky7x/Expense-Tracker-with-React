function CardHeader(props) {
  const classes = "card-header text-bg-dark " + props.className;
  return (
    <div className={classes}>
      <h2 className="fw-semibold">
        {props.title} {props.children}
      </h2>
    </div>
  );
}

export default CardHeader;
