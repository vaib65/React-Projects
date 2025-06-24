import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  // const addvalue=()=>{
  //   setCount(count=>count + 1);
  // }

  const addvalue = () => {
    // counter = counter + 1;
    if (count >= 20) {
      setCount(20);
    } else setCount((count) => count + 1);
  };

  return (
    <>
      <h1 className="bg-green-900  text-black p-4 rounded-xl mb-5">Tailwind Test</h1>
      <Card username="John" />
      <Card username="Sam" />
    </>
  );
}

export default App;
