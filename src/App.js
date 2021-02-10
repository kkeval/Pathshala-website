import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";

import Problems from "./components/Problems.js";

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/Home" exact component={() => <MainPage />} />
        <Route path="/" exact component={() => <MainPage />} />
        <Route path="/Problems" exact component={() => <Problems />} />
      </Switch>
    </div>
  );
}
export default App;
