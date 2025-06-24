import Home from "./components/Home"
import "./App.css";
import { useState } from "react";


function App() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
      setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  }
  document.body.style.background="#eee"

  return (
    <>
      <div className=" container text-center ">
        <Home classes={"subtitle"} text={name} />
        <Home classes={"subtitle mb-4"} text={!date?"DOB":date} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt
          blanditiis? Provident ducimus enim ad sint? Eius asperiores dolorem a.
          Recusandae, 
          repellat, laborum architecto nisi eius nemo, amet nobis voluptates.
          Odit harum facere sint libero maiores quia, nihil voluptatum optio et
          quam repellendus!
        </p>
        <footer className="flex" style={{
          justifyContent: "space-around",
          position: "relative",
          top:"40vh"
        }}>
          <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
          <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
        </footer>
      </div>
    </>
  );
}

export default App
