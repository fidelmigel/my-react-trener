import s from "./Form.module.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log({ username, email, password });
    e.target.reset();
  };

  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input className={s.input} type="text" name="username" />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input className={s.input} type="text" name="email" />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input className={s.input} type="password" name="password" />
        </label>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
