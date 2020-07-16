import React from "react";
import statisticalData from "../../json/statistical-data.json";
import StatList from "./statList/StatList";
import styles from "./statistics.module.css";

const Statistics = () => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <StatList items={statisticalData} />
  </section>
);

export default Statistics;
