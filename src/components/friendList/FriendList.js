import React from "react";
import FriendItem from "./friendItem/FriendItem";
// import friends from "../../json/friends.json";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  // <ul className={styles.friendList}>
  //   <FriendItem items={friends} />
  // </ul>
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

export default FriendList;
