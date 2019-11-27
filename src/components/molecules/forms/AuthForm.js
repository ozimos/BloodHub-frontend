import React from "react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "apolloUtils/requests";
import { saveUserToken } from "utils/auth";

export default function AuthForm({
  initialValues,
  validationSchema,
  authMutation,
  redirectPath,
  children
}) {
  const { data: queryData } = useQuery(IS_LOGGED_IN);
  const [authorizeUser, { data }] = useMutation(authMutation, {
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
    }
  });

  const handleSubmit = async (
    { bloodGroup, document, ...values },
    { setSubmitting }
  ) => {
    const data = bloodGroup
      ? { donor: { create: { bloodGroup, document } }, ...values }
      : values;
    await authorizeUser({ variables: { data } });
    setSubmitting(false);
  };
  const defaultRedirectPath =
    queryData && queryData[IS_LOGGED_IN].isDonor
      ? "/dashboard"
      : "/blood-request-details";

  return queryData && queryData[IS_LOGGED_IN].isLoggedIn ? (
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
