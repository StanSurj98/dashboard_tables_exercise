import { useState } from "react";
import "./App.css";
import Row from "./components/Row";

// Test Data
// const oneRowTest = [{ value: null }, { value: null }, { value: null }];
const NUM_OF_COLS = 7; // Can make this dynamic in future according to user input or something

function App() {
  const [multiRowData, setMultiRowData] = useState([
    Array(NUM_OF_COLS).fill({ cellValue: null }),
  ]);
  const [filledCellCount, setFilledCellCount] = useState(0);

  // Handlers
  const handleAddRow = (e) => {
    e.preventDefault();
    // console.log(e);
    // Update state -> spread prev data and append a NEW array at the same # of cells as previous with default value: null
    setMultiRowData((prev) => [
      ...prev,
      Array(prev[0].length).fill({ cellValue: null }),
    ]);
    // console.log(multiRowData)
  };

  return (
    <div className="App">
      <p>Number of Cells Filled: {filledCellCount}</p>
      <button type="submit" onClick={(e) => handleAddRow(e)}>
        Add New Row
      </button>
      <table>
        <thead>
          <tr>
            <th></th>
            {/* Ugly will do for now hahah */}
            <th scope="col">E1</th>
            <th scope="col">E2</th>
            <th scope="col">E3</th>
            <th scope="col">E4</th>
            <th scope="col">E5</th>
            <th scope="col">E6</th>
            <th scope="col">E7</th>
          </tr>
        </thead>
        <tbody>
          {/* O(N^2) - Maps over 2D array*/}
          {multiRowData.map((rowData, index) => (
            <Row rowData={rowData} rowLabel={index}></Row>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
