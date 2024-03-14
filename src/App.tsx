import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Accordion />
      <Search />
    </div>
  );
}

export default App;
