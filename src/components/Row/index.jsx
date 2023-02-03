import React from "react";
import Cell from "../Cell";

const Row = ({ rowData, rowIndex, handleCellChange }) => {
  // console.log(`rowData: `, rowData)
  return (
    <tr>
      <th scope="row">{`R${rowIndex}`}</th>

      {/* O(N) - Maps over 1D array */}
      {rowData.map(({ cellValue }, cellIndex) => (
        <Cell key={cellIndex} cellValue={cellValue} cellIndex={cellIndex} rowIndex={rowIndex} handleCellChange={handleCellChange}/>
      ))}
    </tr>
  );
};

export default Row;
