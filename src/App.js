
import './App.css';
import NavBar from "./components/NavBar"
import Register from './components/Register';
import Dashbaord from './components/Dashboard';
import {BrowserRouter as Router, Switch, Route, Redirect, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Dashbaord/>}/>
      </Routes>
    </div>
  );
}

export default App;
