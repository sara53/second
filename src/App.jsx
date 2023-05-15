import { useState } from "react";
import "./App.css";
import Content from "./components/functionComponents/Content";
import { MyCounter } from "./components/functionComponents/MyCounter";
import { MyNav } from "./components/functionComponents/MyNav";
import MySlider from "./components/functionComponents/MySlider";

/**
 * React Hooks
 *
 */
function App() {
  let [fname, setFname] = useState("mona");

  let greet = (data) => {
    setFname(data);
  };
  return (
    <div>
      <h2 className="bg-light text-center p-3">{fname}</h2>
      <Content test={greet} />
    </div>
  );
}

export default App;
