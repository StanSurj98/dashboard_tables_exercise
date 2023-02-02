import { useState } from "react";
import "./App.css";
import Row from './components/Row';

// Test Data
const oneRowTest = [{ value: "" }, { value: "" }, { value: "" }];
const multiRowTest = [oneRowTest, oneRowTest, oneRowTest];

function App() {
  const [rowData, setRowData] = useState(multiRowTest);


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>E1</th>
            <th>E2</th>
            <th>E3</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((col, index) => (
            <Row columnData={col} rowLabel={index}></Row>
          ))}
        </tbody>
      </table>
      <button type="submit" onClick={() => setRowData(prev => [...prev, oneRowTest])}>
        Add Row
      </button>
    </div>
  );
}

export default App;
