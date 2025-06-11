import styles from "../styles/Table.module.css";

export default function Table({ rows, columns }) {
  const colHeaders = columns.map((column) => (
    <th className={styles.columnHeader} key={column.key} scope="col">
      {column.column}
    </th>
  ));

  const rowElements = rows.map((row, rowIndex) => (
  <tr key={row.key}>
    <th className={styles.rowHeader} scope="row">{row.row}</th>
    {columns.map((col, colIndex) => {
      const isLastCell = rowIndex === rows.length - 1 && colIndex === columns.length - 1;
      return (
        <td
          className={`${styles.cell} ${isLastCell ? styles.last : ''}`}
          key={col.key}
        >
          {!row.data[colIndex] || row.data[colIndex] === "" ? (
            ""
          ) : (
            <div
              data-length={row.data[colIndex].length}
              className={
                row.data[colIndex].style === 1
                  ? styles.dataSingle
                  : styles.dataDuo
              }
            ></div>
          )}
        </td>
      );
    })}
  </tr>
));


  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.empty}></th>
          {colHeaders}
        </tr>
      </thead>
      <tbody>{rowElements}</tbody>
    </table>
  );
}