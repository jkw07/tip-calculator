import logo from "./images/logo.svg";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Form />
    </div>
  );
}

export default App;
