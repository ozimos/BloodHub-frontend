import React from "react";
import { getAllByLabelText } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, act } from "utils/test-utils";
import DonorSignup from "./DonorSignup";

const labels = [
  "First Name",
  "Last Name",
  "Email Address",
  "Password",
  "Verify Password",
  "Blood Group", "Street Address", "Local Government", "State"
];

const Wrapper = () => (
  <MemoryRouter>
    <DonorSignup />
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
  });
