import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendItem.module.css";

// const FriendItem = ({ friends }) =>
//   friends.map((friend) => (
//     <li className={styles.item} key={friend.id}>
//       <span
//         className={friend.isOnline ? styles.isActive : styles.status}
//       ></span>
//       <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
//       <p className={styles.name}>{friend.name}</p>
//     </li>
//   ));

function FriendItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isActive : styles.status}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

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
