import logo from './Holberton Logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email" for = "email">Email: </label>
          <input type="email" name="email" id = "email"></input>
          &nbsp;&nbsp;
          <label htmlFor="password" for = "password">Password: </label>
          <input type="password" name="password" id ="password"></input>
          &nbsp;&nbsp;
          <button>OK</button>
        </form>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
