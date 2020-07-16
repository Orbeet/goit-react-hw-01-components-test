import React from "react";
import user from "../../json/user.json";
import UserDescription from "./userDescription/UserDescription";
import UserStats from "./userStats/UserStats";
import styles from "./Profile.module.css";

const Profile = () => (
  <div className={styles.profile}>
    <UserDescription {...user} />
    <UserStats {...user.stats} />
  </div>
);

export default Profile;
