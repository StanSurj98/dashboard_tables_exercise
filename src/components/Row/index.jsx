import React from "react";
import Cell from "../Cell";

const Row = ({ rowData, rowLabel }) => {
  // console.log(`rowData: `, rowData)
  return (
    <tr>
      <th scope="row">{`R${rowLabel + 1}`}</th>
      {/* O(N) - Maps over 1D array */}
      {rowData.map(({cellValue}) => (
        <Cell cellValue={cellValue}/>
      ))}
    </tr>
  );
};

export default Row;
