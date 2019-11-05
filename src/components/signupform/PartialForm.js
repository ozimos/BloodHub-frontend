import React from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { string } from "yup";
import BaseSignupForm from "./BaseSignupForm";

export const baseInitialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

export const baseValidationFields = {
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: string()
    .email("Invalid email addresss`")
    .required("Required")
};

function PartialForm({
  component: Component,
  dispatch,
  action,
  initialValues,
  validationSchema,
  redirectPath,
  isLoggedIn
}) {
  const handleSubmit = async (values, { setSubmitting }) => {
    await dispatch(action(values));
    setSubmitting(false);
  };

  return isLoggedIn ? (
    <Redirect to={redirectPath} />
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <BaseSignupForm component={Component} />
    </Formik>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PartialForm);
