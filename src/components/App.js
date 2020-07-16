import React from "react";
import Profile from "./profile/Profile";
import user from "../json/user.json";
import Statistics from "./statistics/Statistics";
import statisticalData from "../json/statistical-data.json";
import FriendList from "./friendList/FriendList";
import friends from "../json/friends.json";
import TransactionHistory from "./transactions/TransactionHistory";
import transactions from "../json/transactions.json";

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
