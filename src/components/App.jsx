import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { TransactionsHistory } from './Transactions/TransactionsHistory';

import user from '../../src/data/user';
import data from '../../src/data/data';
import friends from '../../src/data/friends';
import transactions from '../../src/data/transactions';

console.log(data.label);
console.log(friends);

export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: '25px',
        width: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
