import React from "react";
import transactions from "../../json/transactions.json";
import Table from "./table/Table";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tableHead}>
      <tr className={styles.table}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <Table items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
