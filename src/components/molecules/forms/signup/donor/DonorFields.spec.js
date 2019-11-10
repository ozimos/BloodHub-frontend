import React from "react";
import { getAllByLabelText } from "@testing-library/dom";
import { Formik, Form } from "formik";
import { render } from "utils/test-utils";
import DonorFields from "./DonorFields";

const formikWrapper = ({ children }) => (
  <Formik>
    <Form>{children}</Form>
  </Formik>
);

const labels = ["Blood Group", "Street Address", "LG", "State"];

it("renders all required input fields", () => {
  const { container } = render(
    <DonorFields handleChange={jest.fn()} />,
    formikWrapper
  );
  const inputFields = getAllByLabelText(
    container,
    content =>  labels.some(entry => content.startsWith(entry)),
    {
      selector: "input",
      exact: false
    }
  );
  expect(inputFields).toHaveLength(labels.length)
});
