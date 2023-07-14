import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BodyContainer from "./Component/BodyContainer";
import Header from "./Component/Header";

function App() {
  return (
    <div className="bodyBackground">
      <Header></Header>
      <BodyContainer></BodyContainer>
    </div>
  );
}

export default App;
