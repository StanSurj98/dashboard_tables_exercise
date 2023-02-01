import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>E1</th>
            <th>E2</th>
            <th>E3</th>
            <th>E4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>R2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
