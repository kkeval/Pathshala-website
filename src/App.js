import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Problems from "./components/Problems.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Home" exact component={() => <MainPage />} />
        <Route path="/" exact component={() => <MainPage />} />
        <Route path="/Problems" exact component={() => <Problems />} />
      </Switch>
    </div>
  );
}
export default App;
