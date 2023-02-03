import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Row from "./components/Row";

// Test Data
// const oneRowTest = [{ value: null }, { value: null }, { value: null }];
const NUM_OF_COLS = 7; // Can make this dynamic in future according to user input or something

function App() {
  const [multiRowData, setMultiRowData] = useState([
    Array(NUM_OF_COLS).fill({ cellValue: "" }),
  ]);
  const [filledCellCount, setFilledCellCount] = useState(0);

  // Handlers
  const handleAddRow = (e) => {
    e.preventDefault();
    // console.log(e);
    // Update state -> spread prev data and append a NEW array at the same # of cells as previous with default value: ""
    setMultiRowData((prev) => [
      ...prev,
      Array(prev[0].length).fill({ cellValue: "" }),
    ]);
    // console.log(multiRowData)
  };

  const handleCellChange = (rowIndex, cellIndex, newValue) => {
    setMultiRowData((prevRows) => {
      // Need to copy prev so it's not stale
      const newRows = [...prevRows];
      // Update the old value with new e.target.value
      newRows[rowIndex][cellIndex] = { cellValue: newValue };
      // Find prevValue for toggling counters
      const prevValue = newRows[rowIndex][cellIndex].cellValue;
      
      
      // ** BUG ** keeps changing counters on multiple onChanges
      // Toggle counters if prevValue is truthy/falsey
      if (prevValue) {
        setFilledCellCount(() => filledCellCount + 1)
      } else if (!prevValue) {
        setFilledCellCount(() => filledCellCount - 1)
      }

      return newRows
    });
  };

  // ** BUG ** still same problem as above...
  // O(N^2) - 2D Array counting...
  // const countCells = (multiRowData) => {
  //   for (let r = 0; r < multiRowData.length; r++) {
  //     for (let c = 0; c < multiRowData[r].length; c++) {
  //       if (multiRowData[r][c].cellValue) {
  //         setFilledCellCount(() => filledCellCount + 1)
  //       }
  //     }
  //   }
  // }
  

  // useEffect(() => {
  //   countCells(multiRowData)
  // }, [multiRowData])

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
            <th scope="col">E0</th>
            <th scope="col">E1</th>
            <th scope="col">E2</th>
            <th scope="col">E3</th>
            <th scope="col">E4</th>
            <th scope="col">E5</th>
            <th scope="col">E6</th>
          </tr>
        </thead>
        <tbody>
          {/* O(N^2) - Maps over 2D array*/}
          {multiRowData.map((rowData, rowIndex) => (
            <Row
              key={rowIndex}
              rowData={rowData}
              rowIndex={rowIndex}
              handleCellChange={handleCellChange}
            ></Row>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
