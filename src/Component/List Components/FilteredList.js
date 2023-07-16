import React from "react";
import ListContainer from "./ListContainer";
import ListItem from "./ListItem";

function FilteredList(props) {
  function deleteL(items) {
    props.onDelete(items);
  }
  if (props.list.length === 0) {
    return (
      <ListContainer className="rounded-top-0">
        <li className="list-group-item bg-warning-subtle">
          <h5>
            No Expenses Available <i className="bi bi-info-circle"></i>
          </h5>
        </li>
      </ListContainer>
    );
  }
  return (
    <ListContainer className="rounded-top-0">
      {props.list.map((items) => {
        items.id = Math.floor(Math.random() * 1000000).toString(36);
        return (
          <ListItem data={items} key={items.id}>
            <button
              className="btn btn-sm btn-danger fw-semibold align-self-center ms-2"
              onClick={() => {
                deleteL(items);
              }}
            >
              X
            </button>
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

export default FilteredList;
