import React from "react";
import { render } from "test-utils";
import { getAllByLabelText } from "@testing-library/dom";
import { Formik, Form } from "formik";
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
