import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Inittial Conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enable button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /Confirm order/i });
  
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
