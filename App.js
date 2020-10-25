import React, {useState} from "react";
import "./styles.css";

export default function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>I&apos;ve been clicked {count} times.</h1>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

