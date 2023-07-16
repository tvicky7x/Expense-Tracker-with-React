import React from "react";

function FilterExpense(props) {
  function getYear(e) {
    props.setYear(e);
  }

  return (
    <div className="input-group">
      <select name="" id="" className="form-select" onChange={getYear}>
        <option value="allYears">All Years</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default FilterExpense;
