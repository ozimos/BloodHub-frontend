import React from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import BaseSignupForm from "./BaseSignupForm";

function PartialForm({
  component: Component,
  dispatch,
  action,
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
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <BaseSignupForm component={Component} />
    </Formik>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PartialForm);
