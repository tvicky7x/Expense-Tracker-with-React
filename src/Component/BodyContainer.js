import "./BodyContainer.css";
import ExpenseCard from "./ExpenseCard";

function BodyContainer() {
  return (
    <div class="container text-center mt-4" className="size">
      <ExpenseCard></ExpenseCard>
    </div>
  );
}

export default BodyContainer;
