import { Field, Form, Formik } from "formik";
import s from "./Form.module.css";

const FormikFullForm = ({ onRegister }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    console.log("User successfully registered!🚀🚀🚀");
  };

  const initialValues = {
    username: "",
    email: "",
    course: "",
    level: "junior",
    details: "",
    isTermsAccepted: false,
  };

  return (
    <div className={s.formWrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name:</span>
              <Field className={s.input} type="text" name="username" />
            </label>
            <label className={s.label}>
              <span>Email:</span>
              <Field className={s.input} type="text" name="email" />
            </label>
            <label className={s.label}>
              <span>Course:</span>
              <Field as="select" className={s.input} name="course">
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="fullstack">Fullstack</option>
                <option value="devops">DevOps</option>
              </Field>
            </label>
            <div>
              <label>
                <Field type="radio" name="level" value="junior" />
                <span>Junior</span>
              </label>
              <label>
                <Field type="radio" name="level" value="middle" />
                <span>Middle</span>
              </label>
              <label>
                <Field type="radio" name="level" value="senior" />
                <span>Senior</span>
              </label>
            </div>
            <label className={s.label}>
              <span>Details:</span>
              <Field as="textarea" className={s.input} name="details" />
            </label>
            <label>
              <Field type="checkbox" name="isTermsAccepted" />
              <span>All terms and rules accepted!</span>
            </label>
            <button
              disabled={!values.isTermsAccepted}
              className={s.button}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikFullForm;
