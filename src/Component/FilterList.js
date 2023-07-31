import React, { useState } from "react";
import YearUpdate from "./Small Components/YearUpdate";
import ListItem from "./List Components/ListItem";
import TotalExpense from "./Small Components/TotalExpense";
import Chart from "./Chart Components/Chart";

function FilterList(props) {
  const [yearSelected, setYear] = useState("2023");
  let FilteredList = props.data.filter((item) => {
    return item.expenseDate.getFullYear().toString() === yearSelected;
  });
  let total = FilteredList.reduce((sum, item) => {
    return sum + item.expenseAmount;
  }, 0);
  function yearSelectorList(year) {
    setYear(year);
  }

  return (
    <div>
      <YearUpdate onYear={yearSelectorList}></YearUpdate>
      <Chart expenseList={FilteredList} total={total}></Chart>
      <TotalExpense sum={total}></TotalExpense>
      <div className="mt-3">
        <ul className="list-group">
          {FilteredList.length === 0 && (
            <li className="list-group-item bg-danger-subtle">
              <h5 className="pt-2">
                No Expenses Available <i className="bi bi-info-circle"></i>
              </h5>
            </li>
          )}
          {FilteredList.map((item) => {
            return (
              <ListItem data={item} key={item.id}>
                <button
                  className="btn btn-sm btn-danger ms-2 align-self-center fw-semibold"
                  onClick={() => {
                    props.deleteList(item.id);
                  }}
                >
                  X
                </button>
              </ListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterList;
