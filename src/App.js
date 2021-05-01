import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import useForm from "./useForm";

const App = () => {
  const [count, setCount] = useState(10);

  const [{ count1, count2 }, setCount1] = useState({ count1: 10, count2: 20 });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [values, handleChange] = useForm({ email: "", password: "" });

  // Using useEffect for local storage

  const [localCount, setCount3] = useState(
    JSON.parse(localStorage.getItem("localCount"))
  );

  useEffect(() => {
    localStorage.setItem("localCount", JSON.stringify(localCount));
  }, [localCount]);

  // Using useRef for focus

  const inputRef = useRef();

  return (
    <div className="App">
      <h1>Hooks in React</h1>
      <br />
      {/*two ways to setCount */}

      <p>two ways to setCount</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <div>{count}</div>

      {/* multiple values in useState and how to change only one */}

      <p>multiple values in useState and how to change only one</p>

      <button
        onClick={() =>
          setCount1((currentCounts) => ({
            ...currentCounts,
            count1: currentCounts.count1 + 1,
          }))
        }
      >
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>

      <br />

      {/* how to use hooks in forms */}

      <p>hooks in forms</p>

      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* how to use custom hooks like useForm for forms */}

      <p>custom hooks like useForm for forms</p>
      <input
        type="text"
        ref={inputRef}
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />

      <br />
      <br />

      {/* div for local storage using useEffect */}

      <p>local storage using useEffect</p>
      <div>{localCount}</div>
      <button onClick={() => setCount3((c) => c + 1)}>Increment</button>

      <br />

      {/* Using useRef for focus */}

      <p>Using useRef for focus</p>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};

export default App;
