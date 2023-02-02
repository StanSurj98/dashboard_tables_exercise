import React from "react";

const Cell = ({cellValue}) => {
  console.log(`Cell Data: `, cellValue)
  return (
    <td>
      <input type={"text"} defaultValue={cellValue} />
    </td>
  );
};

export default Cell;
