import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BodyContainer from "./Component/Container Components/BodyContainer";
import Header from "./Component/Header";
import Card from "./Component/Container Components/Card";
import CardHeader from "./Component/Container Components/CardHeader";
import CardBody from "./Component/Container Components/CardBody";
import ExpenseObject from "./Component/ExpenseObject";
import { useState } from "react";
import ExpenseForm from "./Component/Form Components/ExpenseForm";
import TotalExpense from "./Component/Report Components/TotalExpense";
import FilterExpense from "./Component/Report Components/FilterExpense";
import FilteredList from "./Component/List Components/FilteredList";

function App() {
  const [Editing, setEdit] = useState(false);
  const [selectedYear, setYear] = useState("2019");
  let YearList = ExpenseObject.filter((item) => {
    return item.expenseDate.getFullYear().toString() === selectedYear;
  });
  const [List, setList] = useState(YearList);
  function updatedYear(stringYear) {
    setYear(stringYear);
  }

  function deleteList(item) {
    setList(
      List.filter((obj) => {
        return obj.id !== item.id;
      })
    );
  }
  function startEditing() {
    setEdit(true);
  }
  function afterEditing() {
    setEdit(false);
  }
  function addExpense(newObj) {
    newObj.id = Math.floor(Math.random() * 1000000).toString(36);
    setList((previousList) => {
      return [...previousList, newObj];
    });
  }
  function filterYear(e) {
    if (e.target.value === "allYears") {
      e.target.classList.remove("bg-dark-subtle");
      setList([...ExpenseObject]);
    } else {
      e.target.classList.add("bg-dark-subtle");
      setList(
        ExpenseObject.filter((item) => {
          return item.expenseDate.getFullYear().toString() === e.target.value;
        })
      );
    }
  }

  return (
    <div>
      <Header title="Expense Tracker">
        <i className="bi bi-clipboard2-data"></i>
      </Header>
      <BodyContainer>
        {!Editing && (
          <div className="mt-3 p-2 bg-dark-subtle rounded-2">
            <button className="btn btn-dark btn-sm" onClick={startEditing}>
              <h3>Add Expense</h3>
            </button>
          </div>
        )}
        {Editing && (
          <Card className="mt-3">
            <CardHeader title="Add Expense">
              <i className="bi bi-pencil-square"></i>
            </CardHeader>
            <CardBody className="text-start">
              <ExpenseForm add={addExpense} submit={afterEditing}></ExpenseForm>
            </CardBody>
          </Card>
        )}

        <Card className="mt-3">
          <CardHeader title="Expenses Report">
            <i className="bi bi-calendar4-week"></i>
          </CardHeader>
          <CardBody>
            <FilterExpense setYear={filterYear}></FilterExpense>
            <TotalExpense data={List}></TotalExpense>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardHeader title="Expenses List">
            <i className="bi bi-card-list"></i>
          </CardHeader>
          <CardBody className="p-0">
            <FilteredList list={List} onDelete={deleteList}></FilteredList>
          </CardBody>
        </Card>
      </BodyContainer>
    </div>
  );
}

export default App;
