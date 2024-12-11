import clsx from "clsx";
import styles from "../User/User.module.css";
const User = ({
  name,
  email,
  bio = "This user hide own bio",
  isOpenToWork,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p>{email}</p>
      <p>{bio}</p>
      <p
        className={clsx(
          styles.status,
          isOpenToWork ? styles.green : styles.red
        )}
      >
        {isOpenToWork ? "ГОТОВИЙ ПРАЦЮВАТИ" : "НЕ ШУКАЄ РОБОТУ"}
      </p>
      <button>Delete</button>
    </div>
  );
};
export default User;
