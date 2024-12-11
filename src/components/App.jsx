import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import User from "../components/User/User";
import usersData from "../data/users.json";
const App = () => {
  return (
    <>
      <Header />
      <h2>Lesson2.Styles</h2>
      <ul className="wrapper">
        {usersData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <Message />
    </>
  );
};

export default App;
