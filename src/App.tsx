import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import PasswordGenerator from "./components/Password-Generator/PasswordGenerator";
import Search from "./components/Search/Search";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Accordion />
      <Search />
      <StopWatch />
      <PasswordGenerator />
    </div>
  );
}

export default App;
