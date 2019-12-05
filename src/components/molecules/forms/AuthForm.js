import React from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "apolloUtils/requests";
import { saveUserToken } from "utils/auth";
import { useHistory } from "react-router-dom";

export default function AuthForm({
  initialValues,
  validationSchema,
  authMutation,
  redirectPath,
  children
}) {
  const history = useHistory();
  const { data: userData } = useQuery(GET_CURRENT_USER);
  const [authorizeUser] = useMutation(authMutation, {
    update(
      cache,
      {
        data: {
          [authMutation]: { user, token }
        }
      }
    ) {
      cache.writeData({ data: { user, token } });
      saveUserToken(token);
    },
    onCompleted() {
      history.push(redirectPath);
    }
  });

  const handleSubmit = async (
    { bloodGroup, document, verifyPassword, ...values },
    { setSubmitting }
  ) => {
    const data = bloodGroup
      ? { donor: { create: { bloodGroup, document } }, ...values }
      : values;
    await authorizeUser({ variables: { data } });
    setSubmitting(false);
  };
  const defaultRedirectPath =
    userData && userData.isLoggedIn && userData[GET_CURRENT_USER].isDonor
      ? "/dashboard"
      : "/blood-request-details";
  return userData && userData.isLoggedIn ? (
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
