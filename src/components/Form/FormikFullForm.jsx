import { useState } from "react";
import s from "./Form.module.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  course: "",
  level: "junior",
  details: "",
  isTermsAccepted: false,
};
const FormikFullForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      return setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
    }
    // setFormData({ ...formData, [name]: value }); // неявне повернення
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
            value={formData.username}
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Course:</span>
          <select
            className={s.input}
            name="course"
            value={formData.course}
            onChange={handleChangeInput}
          >
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
            <option value="devops">DevOps</option>
          </select>
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="junior"
              checked={formData.level === "junior"}
              name="level"
              onChange={handleChangeInput}
            />
            <span>Junior</span>
          </label>
          <label>
            <input
              type="radio"
              value="middle"
              checked={formData.level === "middle"}
              name="level"
              onChange={handleChangeInput}
            />
            <span>Middle</span>
          </label>
          <label>
            <input
              type="radio"
              value="senior"
              checked={formData.level === "senior"}
              name="level"
              onChange={handleChangeInput}
            />
            <span>Senior</span>
          </label>
        </div>
        <label className={s.label}>
          <span>Details:</span>
          <textarea
            className={s.input}
            name="details"
            value={formData.details}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            name="isTermsAccepted"
            checked={formData.isTermsAccepted}
            onChange={handleChangeInput}
          />
          <span>All terms and rules accepted!</span>
        </label>

        <button
          disabled={!formData.isTermsAccepted}
          className={s.button}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormikFullForm;
