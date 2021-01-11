//------------------------------------------------------
// ----- import component PROFILE AND DATA FOR IT;
import Profile from './components/Profile/Profile';
import user from './user.json';
//------------------------------------------------------
// ----- import component "STATISTIC AND DATA FOR IT";
// import Statistic from './components/Statistic/Statistic'
import StatisticsList from './components/Statistic/StatisticsList';
import statisticalData from './statistical-data.json';
//------------------------------------------------------
// ----- import component "FRIENDS AND DATA FOR IT;"
// import Friend from './components/Friends/Friend'
import FriendsList from './components/Friends/FriendsList';
import friends from './friends.json';
//------------------------------------------------------
// ----- import component "transaction AND DATA FOR IT;"
// import Transaction from './components/HistoryTransaction/Transaction';
import TransactionsList from './components/HistoryTransaction/TransationsList';
import transactions from './transactions.json';
//------------------------------------------------------
// import Container from './components/Container/Container';

export default function App() {
  return (
    // <Container>
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        urlImg={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* ---------------------------------------------- */}
      <StatisticsList items={statisticalData} title="default" />
      {/* ---------------------------------------------- */}

      <FriendsList items={friends} />
      {/* ---------------------------------------------- */}

      <TransactionsList items={transactions} />
      {/*  </Container> */}
    </>
  );
}
