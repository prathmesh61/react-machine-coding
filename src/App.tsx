import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Accordion />
      <Search />
      <StopWatch />
    </div>
  );
}

export default App;
