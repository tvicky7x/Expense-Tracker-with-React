import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BodyContainer from "./Component/Container Components/BodyContainer";
import Header from "./Component/Header";
import Card from "./Component/Container Components/Card";
import CardHeader from "./Component/Container Components/CardHeader";
import CardBody from "./Component/Container Components/CardBody";
import ExpenseForm from "./Component/Form Components/ExpenseForm";
import FilterList from "./Component/FilterList";
import { useState } from "react";

function App() {
  const [addedData, setAdd] = useState("");
  const [Editing, setEdit] = useState(false);
  function afterSubmit() {
    setEdit(false);
  }
  function startAdding() {
    setEdit(true);
  }
  function addList(data) {
    if (addedData === "") {
      let newList = [data];
      setAdd(newList);
    } else {
      let newList = [...addedData, data];
      setAdd(newList);
    }
  }
  function deleteExtraList() {
    setAdd("");
  }
  function deleteNewlyList(item) {
    if (addedData !== "") {
      let expenseStore = JSON.parse(localStorage.getItem("expenseObject"));
      let deletedList = expenseStore.filter((Obj) => Obj.id !== item.id);
      localStorage.setItem("expenseObject", JSON.stringify(deletedList));
      let newList = addedData.filter((Obj) => Obj.id !== item.id);
      setAdd(newList);
    }
  }
  return (
    <div>
      <Header title="Expense Tracker">
        <i className="bi bi-wallet2"></i>
      </Header>
      <BodyContainer>
        {!Editing && (
          <div className="mt-3 p-3 rounded-1 bg-dark-subtle">
            <button
              className="btn btn-lg btn-dark fw-medium"
              onClick={startAdding}
            >
              Add Expense
            </button>
          </div>
        )}
        {Editing && (
          <Card className="mt-3">
            <CardHeader title="Expense Details">
              <i className="bi bi-pencil-square"></i>
            </CardHeader>
            <CardBody className="text-start">
              <ExpenseForm onAdd={addList} onSubmit={afterSubmit}></ExpenseForm>
            </CardBody>
          </Card>
        )}
        <Card className="mt-3">
          <CardHeader title="Expense Report">
            <i className="bi bi-clipboard2-data"></i>
          </CardHeader>
          <CardBody>
            <FilterList
              onAdd={addedData}
              onDelete={deleteExtraList}
              onNewDelete={deleteNewlyList}
            ></FilterList>
          </CardBody>
        </Card>
      </BodyContainer>
    </div>
  );
}

export default App;
