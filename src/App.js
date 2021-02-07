import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar.js';
import { Route } from "react-router-dom";
import Problems from './components/Problems';

function App() { 

  return (

    <div className="App">          
      <Navbar />
      <div className="content">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Problems" component={Problems} />
      </div>
      
    </div>

  );
}
export default App;
