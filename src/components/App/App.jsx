import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friendList/FriendList";
import TransactionHistory from "../transactionHistory/TransactionHistory";
import user from "../profile/user.json";
import data from "../statistics/data.json";
import friends from "../friendList/friends.json";
import transactions from "../transactionHistory/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics info={data} />
      <FriendList data={friends} />
      <TransactionHistory transaction={transactions} />
    </>
  );
}
