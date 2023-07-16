function ListContainer(props) {
  const classes = "list-group " + props.className;
  return <ul className={classes}>{props.children}</ul>;
}

export default ListContainer;
