import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendItem.module.css";

const FriendItem = ({ items = [] }) =>
  items.map((item) => (
    <li className={styles.item} key={item.id}>
      <span className={item.isOnline ? styles.isActive : styles.status}></span>
      <img className={styles.avatar} src={item.avatar} alt="" width="48" />
      <p className={styles.name}>{item.name}</p>
    </li>
  ));

FriendItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendItem;
