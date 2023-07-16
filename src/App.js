import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BodyContainer from "./Component/BodyContainer";
import Header from "./Component/Header";
import Card from "./Component/Card";
import CardHeader from "./Component/CardHeader";
import CardBody from "./Component/CardBody";
import ListContainer from "./Component/ListContainer";
import ListItem from "./Component/ListItem";
import ExpenseObject from "./Component/ExpenseObject";
import { useState } from "react";

function App() {
  const [List, setList] = useState(ExpenseObject);
  function deleteList(item) {
    let newList = List.filter((obj) => {
      return obj.id !== item.id;
    });
    setList(newList);
  }
  function addExpense(e) {
    e.preventDefault();
    let expenseName = document.getElementById("expenseName").value;
    let expenseAmount = document.getElementById("expenseAmount").value;
    let expenseDate = document.getElementById("expenseDate").value;
    console.log(expenseName, expenseAmount, expenseDate);
  }
  return (
    <div>
      <Header title="Expense Tracker">
        <i className="bi bi-clipboard2-data"></i>
      </Header>
      <BodyContainer>
        <Card className="mt-3">
          <CardHeader title="Add Expense">
            <i class="bi bi-pencil-square"></i>
          </CardHeader>
          <CardBody className="text-start">
            <form action="#" onSubmit={addExpense}>
              <div>
                <label htmlFor="expenseName" className="form-label">
                  Expense Name
                </label>
                <input
                  type="text"
                  name="expenseName"
                  id="expenseName"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="expenseAmount" className="form-label">
                  Expense Amount
                </label>
                <input
                  type="number"
                  name="expenseAmount"
                  id="expenseAmount"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="expenseDate" className="form-label">
                  Expense Date
                </label>
                <input
                  type="date"
                  name="expenseDate"
                  id="expenseDate"
                  className="form-control"
                  style={{}}
                />
              </div>
              <div className="d-grid mt-3">
                <button
                  className="b btn btn-dark btn-sm fw-semibold"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardHeader title="Expense Items">
            <i class="bi bi-card-list"></i>
          </CardHeader>
          <CardBody className="p-0">
            <ListContainer className="rounded-top-0">
              {List.map((items) => {
                return (
                  <ListItem data={items}>
                    <button
                      className="btn btn-sm btn-danger fw-semibold align-self-center ms-2"
                      onClick={() => {
                        deleteList(items);
                      }}
                    >
                      X
                    </button>
                  </ListItem>
                );
              })}
            </ListContainer>
          </CardBody>
        </Card>
      </BodyContainer>
    </div>
  );
}

export default App;
