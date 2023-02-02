// Row Component (Pull later)
const Row = ({ columnData, rowLabel }) => {
  return (
    <tr>
      {/* Some sort of row # identifier later */}
      <th>R{rowLabel + 1}</th>
      {columnData.map((cell) => (
        <td>
          <input type={"text"} defaultValue={cell.value} />
        </td>
      ))}
    </tr>
  );
};

export default Row;