import React from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AuthForm({
  dispatch,
  action,
  initialValues,
  validationSchema,
  redirectPath,
  isLoggedIn,
  user,
  children
}) {
  const handleSubmit = async (values, { setSubmitting }) => {
    await dispatch(action(values));
    setSubmitting(false);
  };

  const defaultRedirectPath = (user && user.isDonor) ? "/dashboard" : "/blood-request-details";

  return isLoggedIn ? (
    <Redirect to={redirectPath || defaultRedirectPath} />
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {children}
    </Formik>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(AuthForm);
