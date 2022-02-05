import "./App.css";
import {
  Toggle,
  Modal,
  Tab,
  Tag,
  AutoComplete,
  ClickToEdit,
} from "./component";

function App() {
  return (
    <div className="App">
      <h1>Toggle</h1>
      <Toggle />
      <h1>Modal</h1>
      <Modal />
      <h1>Tab</h1>
      <Tab />
      <h1>Tag</h1>
      <Tag />
      <h1>AutoComplete</h1>
      <AutoComplete />
      <h1>ClickToEdit</h1>
      <ClickToEdit />
    </div>
  );
}

export default App;
