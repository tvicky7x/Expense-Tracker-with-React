import React from "react";

function YearUpdate(props) {
  function yearFilter(e) {
    props.onYear(e.target.value);
  }

  return (
    <div>
      <select
        name="yearUpdate"
        id="yearUpdate"
        defaultValue={2023}
        onChange={yearFilter}
        className="form-select"
      >
        <option value="2019" key={2019}>
          2019
        </option>
        <option value="2020" key={2020}>
          2020
        </option>
        <option value="2021" key={2021}>
          2021
        </option>
        <option value="2022" key={2022}>
          2022
        </option>
        <option value="2023" key={2023}>
          2023
        </option>
      </select>
    </div>
  );
}

export default YearUpdate;
