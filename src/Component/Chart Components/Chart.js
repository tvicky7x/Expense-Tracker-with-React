import React from "react";
import CharBar from "./CharBar";

function Chart(props) {
  console.log(props.total);
  const DataObject = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.expenseList.map((item) => {
    DataObject[new Date(item.expenseDate).getMonth()].value =
      DataObject[new Date(item.expenseDate).getMonth()].value +
      item.expenseAmount;
  });

  if (props.addedList !== "") {
    console.log(DataObject);
    props.addedList.map((item) => {
      DataObject[new Date(item.expenseDate).getMonth()].value =
        DataObject[new Date(item.expenseDate).getMonth()].value +
        item.expenseAmount;
    });
  }
  DataObject.map((item) => {
    if (props.total === 0) {
      item.value = 0;
    } else {
      item.value = (item.value / props.total) * 100;
    }
  });

  return (
    <div
      className="bg-dark-subtle mt-3 rounded-2 pt-2 pb-2"
      style={{ height: "200px" }}
    >
      <div className="d-flex justify-content-evenly font-monospace">
        {DataObject.map((item) => {
          return (
            <CharBar
              key={item.label}
              label={item.label}
              value={item.value}
            ></CharBar>
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
