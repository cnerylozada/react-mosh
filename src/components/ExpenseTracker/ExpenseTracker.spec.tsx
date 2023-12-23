import { render, screen, fireEvent, act } from "@testing-library/react";
import { ExpenseTracker } from "./ExpenseTracker";
import { fillOuTBasicForm, validBasicFormValues } from "../../utils/testing";

describe("ExpenseTracker component", () => {
  beforeEach(() => {
    render(<ExpenseTracker />);
  });

  it("should render no-pdoructs-message when it is empty", () => {
    const mainTitle = screen.getByText(/expensetracker/i);
    expect(mainTitle).toBeInTheDocument();

    const element = screen.getByTestId("noProductsMessage");
    expect(element.textContent).toBe("There is no products to show");
  });

  it("should render list of products when they are entered by form", async () => {
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });

    for (let index = 0; index < validBasicFormValues.length; index++) {
      await fillOuTBasicForm(screen, validBasicFormValues[index]);
      await act(() => {
        fireEvent.click(submitButton);
      });
    }
    const products = screen.getAllByTestId("product");
    expect(products.length).toBe(validBasicFormValues.length);
    const element = screen.getByTestId("noProductsMessage");
    expect(element.textContent).toBe("");
  });

  it("should render products by category selected", async () => {
    const submitButton = screen.getByRole("button", {
      name: /submit/i,
    });
    const categorySelected = "Groceries";

    for (let index = 0; index < validBasicFormValues.length; index++) {
      await fillOuTBasicForm(screen, validBasicFormValues[index]);
      await act(() => {
        fireEvent.click(submitButton);
      });
    }

    const categorySelect = screen.getByTestId("categorySelect");
    await act(() => {
      fireEvent.change(categorySelect, { target: { value: categorySelected } });
    });
    expect(categorySelect).toHaveValue(categorySelected);
    const products = screen.getAllByTestId("product");
    expect(products.length).toBe(
      validBasicFormValues.filter((_) => _.category === categorySelected).length
    );
  });
});
