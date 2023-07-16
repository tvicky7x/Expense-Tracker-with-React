import React from "react";

function YearList(props) {
  let year = props.add;
  return <option value={year}>{year}</option>;
}

export default YearList;
