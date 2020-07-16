import React from "react";
import FriendItem from "./friendItem/FriendItem";
import friends from "../../json/friends.json";
import styles from "./FriendList.module.css";

const FriendList = () => (
  <ul className={styles.friendList}>
    <FriendItem items={friends} />
  </ul>
);

export default FriendList;
