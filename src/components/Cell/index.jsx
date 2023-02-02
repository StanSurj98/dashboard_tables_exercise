import React from "react";

const Cell = ({cellData}) => {
  return (
    <td>
      <input type={"text"} defaultValue={cellData} />
    </td>
  );
};

export default Cell;
