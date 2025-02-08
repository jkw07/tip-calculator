import logo from "./images/logo.svg";
import {Form} from "./components/Form";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className="App">
      <Form />
    </div>
    </>
  );
}

export default App;
