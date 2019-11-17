import React from "react";
import { getAllByLabelText } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import { toMatchDiffSnapshot } from "snapshot-diff";
import { render, fireEvent, act } from "utils/test-utils";
import DonorSignup from "./DonorSignup";

expect.extend({ toMatchDiffSnapshot });

const labels = [
  "First Name",
  "Last Name",
  "Email Address",
  "Password",
  "Verify Password",
  "Blood Group",
  "Street Address",
  "Local Government",
  "State"
];

const Wrapper = () => (
  <MemoryRouter>
    <DonorSignup />
  </MemoryRouter>
);

it("renders all required input fields with error labels", async () => {
  const { container, getByText, asFragment } = render(<Wrapper />);
  const firstRender = asFragment();
  const submitButton = getByText(/Proceed/i);

  const inputFields = getAllByLabelText(
    container,
    content => labels.some(label => content.startsWith(label)),
    {
      selector: "input",
      exact: false
    }
  );
  expect(inputFields).toHaveLength(labels.length);

  await act(async () => {
    inputFields.forEach(field => fireEvent.blur(field, {}));
    fireEvent.click(submitButton, {});
  });

  expect(firstRender).toMatchDiffSnapshot(asFragment(), {
    contextLines: 0,
    stablePatchmarks: true
  });
});
