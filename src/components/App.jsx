import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import User from "../components/User/User";
import styles from "../components/App.module.css";
import usersData from "../data/users.json";
import img from "../assets/react.svg";
import Button from "../components/Button/Button";
import { ImWondering } from "react-icons/im";

const App = () => {
  return (
    <>
      <Header />

      <Button>Click</Button>
      <Button>
        <ImWondering />
      </Button>

      <h2>Lesson2.Styles</h2>
      <ul className="wrapper">
        {usersData.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      <div className={styles.wrapper}>
        <div className={styles.box}>box1</div>
        <div className={styles.box2}>box2</div>
      </div>
      <img src={img} />
      <img src={img} />

      <Message />
    </>
  );
};

export default App;
