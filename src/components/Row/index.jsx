import React from "react";
import Cell from "../Cell";

const Row = ({ columnData, rowLabel }) => {
  return (
    <tr>
      <th scope="row">R{rowLabel + 1}</th>
      {/* O(N) - Maps over 1D array */}
      {columnData.map(({value}) => (
        <Cell cellData={value}/>
      ))}
    </tr>
  );
};

export default Row;
