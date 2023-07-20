import React, { useState } from "react";
import YearUpdate from "./Small Components/YearUpdate";
import ListItem from "./List Components/ListItem";
import TotalExpense from "./Small Components/TotalExpense";
import Chart from "./Chart Components/Chart";

function FilterList(props) {
  const [yearSelected, setYear] = useState("2023");
  let expenseData = JSON.parse(localStorage.getItem("expenseObject"));
  if (expenseData === null) expenseData = [];
  const [List, setList] = useState(
    expenseData.filter((item) => {
      return new Date(item.expenseDate).getFullYear().toString() === "2023";
    })
  );
  let total = List.reduce((sum, item) => {
    return sum + item.expenseAmount;
  }, 0);
  if (props.onAdd !== "") {
    total =
      total +
      props.onAdd.reduce((sum, item) => {
        return sum + item.expenseAmount;
      }, 0);
  }
  function yearSelectorList(updatedList, year) {
    setYear(year);
    setList(updatedList);
  }
  function deleteList(item) {
    let expenseStore = JSON.parse(localStorage.getItem("expenseObject"));
    let deletedList = expenseStore.filter((Obj) => Obj.id !== item.id);
    localStorage.setItem("expenseObject", JSON.stringify(deletedList));
    setList(
      deletedList.filter((item) => {
        return (
          new Date(item.expenseDate).getFullYear().toString() === yearSelected
        );
      })
    );
  }
  function deleteNewList(item) {
    props.onNewDelete(item);
  }
  return (
    <div>
      <YearUpdate
        onYear={yearSelectorList}
        onDelete={props.onDelete}
      ></YearUpdate>
      <Chart expenseList={List} addedList={props.onAdd} total={total}></Chart>
      <TotalExpense sum={total}></TotalExpense>
      <div className="mt-3">
        <ul className="list-group">
          {total === 0 && (
            <li className="list-group-item bg-danger-subtle">
              <h5 className="pt-2">
                No Expenses Available <i className="bi bi-info-circle"></i>
              </h5>
            </li>
          )}
          {List.map((listData) => {
            return (
              <ListItem data={listData} key={listData.id}>
                <button
                  className="btn btn-sm btn-danger ms-2 align-self-center fw-semibold"
                  onClick={() => deleteList(listData)}
                >
                  X
                </button>
              </ListItem>
            );
          })}
          {props.onAdd !== "" &&
            props.onAdd
              .filter((item) => {
                return (
                  item.expenseDate.getFullYear().toString() === yearSelected
                );
              })
              .map((addedData) => {
                return (
                  <ListItem data={addedData} key={addedData.id}>
                    <button
                      className="btn btn-sm btn-danger ms-2 align-self-center fw-semibold"
                      onClick={() => deleteNewList(addedData)}
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
