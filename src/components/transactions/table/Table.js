import React from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";

const Table = ({ items = [] }) =>
  items.map((item) => (
    <tr key={item.id}>
      <td className={styles.tableData}>{item.type}</td>
      <td className={styles.tableData}>{item.amount}</td>
      <td className={styles.tableData}>{item.currency}</td>
    </tr>
  ));

Table.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
