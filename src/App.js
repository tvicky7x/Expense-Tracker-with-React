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
import ExpenseForm from "./Component/ExpenseForm";

function App() {
  const [List, setList] = useState(ExpenseObject);
  let sum = List.reduce((sum, item) => sum + item.expenseAmount, 0);
  console.log(sum);
  function deleteList(item) {
    let newList = List.filter((obj) => {
      return obj.expenseName !== item.expenseName;
    });
    setList(newList);
  }
  function addExpense(newObj) {
    let newList = [...List, newObj];
    setList(newList);
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
            <ExpenseForm add={addExpense}></ExpenseForm>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardHeader title="Expenses List">
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
