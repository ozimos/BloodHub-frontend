import React from "react";
import { getAllByLabelText } from "@testing-library/dom";
import { Formik } from "formik";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "utils/test-utils";
import BaseSignupForm, {
  baseInitialValues as initialValues
} from "./BaseSignupForm";

const handleSubmit = jest.fn((values, { setSubmitting }) => {
  setSubmitting(false);
});

const formFieldNames = [
  "firstName",
  "lastName",
  "email",
  "password",
  "verifyPassword"
];

const labels = [
  "First Name",
  "Last Name",
  "Email Address",
  "Password",
  "Verify Password"
];

const Wrapper = () => (
  <MemoryRouter>
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <BaseSignupForm />
    </Formik>
  </MemoryRouter>
);

it("renders all required input fields", async () => {
  const { container, getByRole } = render(<Wrapper />);
  const inputFields = getAllByLabelText(
    container,
    content => labels.some(entry => content.startsWith(entry)),
    {
      selector: "input",
      exact: false
    }
  );
  expect(inputFields).toHaveLength(labels.length);
  const submitButton = getByRole("button");
  await act(async () => {
    fireEvent.click(submitButton, {});
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit.mock.calls[0][0]).toContainAllKeys(formFieldNames);
});
