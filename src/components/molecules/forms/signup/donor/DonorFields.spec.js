import React from "react";
import { getAllByLabelText } from "@testing-library/dom";
import { Formik, Form } from "formik";
import { render } from "utils/test-utils";
import DonorFields, { donorInitialValues } from "./DonorFields";

const formikWrapper = ({ children }) => (
  <Formik initialValues={donorInitialValues}>
    <Form>{children}</Form>
  </Formik>
);

const labels = ["Blood Group", "Street Address", "Local Government", "State"];

it("renders all required input fields", () => {
  const { container } = render(<DonorFields />, formikWrapper);
  const inputFields = getAllByLabelText(
    container,
    content => labels.some(entry => content.startsWith(entry)),
    {
      selector: "input",
      exact: false
    }
  );
  expect(inputFields).toHaveLength(labels.length);
});
