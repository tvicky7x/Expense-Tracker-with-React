import "./App.css";
import BodyContainer from "./Component/BodyContainer";
import Header from "./Component/Header";
import ExpenseCard from "./Component/ExpenseCard";

function App() {
  return (
    <div>
      <Header></Header>
      <BodyContainer>
        <ExpenseCard></ExpenseCard>
      </BodyContainer>
    </div>
  );
}

export default App;
