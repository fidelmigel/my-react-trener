import { useState } from "react";
import s from "./Form.module.css";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // поганий підхід , багато однотипного коду
  /* const handleChangeUsername = (e) => {
    console.log(e.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  };
  const handleChangeEmail = (e) => {
    console.log(e.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  };
  const handleChangePassword = (e) => {
    console.log(e.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  }; */
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // неявне повернення
    //або

    //setFormData((prev) => {
    // return {
    //  ...prev,
    // [name]: value,
    //};
    // });
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            type="text"
            name="username"
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            type="text"
            name="email"
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            className={s.input}
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
        </label>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
