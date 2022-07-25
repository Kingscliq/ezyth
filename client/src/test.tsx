import "./helper.css";

import React from "react";
import { render } from "react-dom";
import { Formik, Field, ErrorMessage, Form, useFormikContext } from "formik";
import * as Yup from "yup";

const Logger = () => {
  const formik = useFormikContext();
  React.useEffect(() => {
    console.group("Formik State");
    console.log("values", formik.values);
    console.log("errors", formik.errors);
    console.log("touched", formik.touched);
    console.log("isSubmitting", formik.isSubmitting);
    console.log("isValidating", formik.isValidating);
    console.log("submitCount", formik.submitCount);
    console.groupEnd();
  }, [
    formik.values,
    formik.errors,
    formik.touched,
    formik.isSubmitting,
    formik.isValidating,
    formik.submitCount
  ]);
  return null;
};
const App = () => (
  <div className="app">
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        isEnabled: true
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Not an email")
      })}
    >
      <Form>
        <Logger />
        <label>First Name </label>
        <Field name="firstName" type="text" />
        <label>Last Name </label>
        <Field name="lastName" type="text" />
        <label>Email </label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <div>
          <Field type="checkbox" name="isEnabled" id="isEnabled" />
          <label className="label-inline" htmlFor="isEnabled">
            Send a copy to yourself
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

render(<App />, document.getElementById("root"));
