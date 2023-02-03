import React from "react";

const Cell = ({ cellValue, cellIndex, rowIndex, handleCellChange }) => {
  // console.log({
  //   Value: cellValue,
  //   "Row Index": rowIndex,
  //   "Cell Index": cellIndex,
  // });
  return (
    <td>
      <input
        type={"text"}
        value={cellValue}
        // Continue calling parent handleChange passing in new e.target.value 
        // NOTE: cellValue is coming from parent state aka ("old")
        onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
      />
    </td>
  );
};

export default Cell;
