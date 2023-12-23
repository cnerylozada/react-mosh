import { render, screen, fireEvent, act } from "@testing-library/react";
import { BasicForm } from "./BasicForm";
import { fillOuTBasicForm, validBasicFormValues } from "../../utils/testing";

describe("BasicForm component", () => {
  const mockSetProduct = vi.fn();
  beforeEach(() => {
    render(<BasicForm setProduct={mockSetProduct} />);
  });

  it("should show submit button disabled when no values are entered", () => {
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it("should save values in inputs", async () => {
    const formTitle = screen.getByText(/basic form/i);
    expect(formTitle).toBeInTheDocument();

    const values = validBasicFormValues[0];
    const { amountInput, categoryInput, descriptionInput } =
      await fillOuTBasicForm(screen, values);

    expect(descriptionInput).toHaveValue(values.description);
    expect(amountInput).toHaveValue(values.amount);
    expect(categoryInput).toHaveValue(values.category);
  });

  it("should trigger submit event when submit button is clicked", async () => {
    const values = validBasicFormValues[0];
    await fillOuTBasicForm(screen, values);

    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submitButton).not.toBeDisabled();
    await act(() => {
      fireEvent.click(submitButton);
    });
    expect(mockSetProduct).toHaveBeenCalled();
  });

  it("should render error message when input is not valid", async () => {
    const descriptionInput = screen.getByLabelText(/Description/i);
    await act(async () => {
      fireEvent.focusOut(descriptionInput);
    });

    const errorMessage = screen.getByText(/required/i);
    expect(errorMessage).toHaveTextContent("Required");
  });
});
