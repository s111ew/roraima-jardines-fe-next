import styles from "../styles/Table.module.css";

export default function Table({ rows, columns }) {
  const colHeaders = columns.map((column) => (
    <th className={styles.columnHeader} key={column.key} scope="col">
      {column.column}
    </th>
  ));

  const rowElements = rows.map((row) => (
    <tr key={row.key}>
      <th className={styles.rowHeader} scope="row">{row.row}</th>
      {columns.map((col) => (
        <td className={styles.cell} key={col.key}>data</td>
      ))}
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