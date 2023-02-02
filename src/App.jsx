import { useState } from "react";
import "./App.css";
import Row from "./components/Row";

// Test Data
const oneRowTest = [{ value: null }, { value: null }, { value: null }];

function App() {
  const [multiRowData, setMultiRowData] = useState([oneRowTest]);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th></th>
            <th scope="col">E1</th>
            <th scope="col">E2</th>
            <th scope="col">E3</th>
          </tr>
        </thead>
        <tbody>
          {/* O(N^2) - Maps over 2D array*/}
          {multiRowData.map((col, index) => (
            <Row columnData={col} rowLabel={index}></Row>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        onClick={() => setMultiRowData((prev) => [...prev, oneRowTest])}
      >
        Add Row
      </button>
    </div>
  );
}

export default App;
