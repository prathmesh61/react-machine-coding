import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Otp from "./components/Otp/Otp";
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
      <Otp />
    </div>
  );
}

export default App;
