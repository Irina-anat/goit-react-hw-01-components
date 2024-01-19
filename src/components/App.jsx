import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
   <>
     <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <div><FriendList friends={friends} /></div>
      <div><TransactionHistory items={transactions} /></div>  
      <GlobalStyle/>
    </>  
  );
};
    


