function CardBody(props) {
  const classes = "card-body " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default CardBody;
