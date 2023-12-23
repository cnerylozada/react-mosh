import { fireEvent, act } from "@testing-library/react";
import { Screen, queries } from "@testing-library/dom/types";
import { IProduct } from "../models/expenseTracker.models";

export const validBasicFormValues: Omit<IProduct, "id">[] = [
  { amount: 25, category: "Groceries", description: "description 1" },
  { amount: 35, category: "Utilities", description: "description 2" },
  { amount: 45, category: "Groceries", description: "description 3" },
];

export const fillOuTBasicForm = async (
  screen: Screen<typeof queries>,
  values: Omit<IProduct, "id">
) => {
  const descriptionInput = screen.getByLabelText(/Description/i);
  const amountInput = screen.getByLabelText(/Amount/i);
  const categoryInput = screen.getByLabelText(/Category/i);

  const { amount, category, description } = values;

  await act(() => {
    fireEvent.change(descriptionInput, {
      target: { value: description },
    });
    fireEvent.change(amountInput, {
      target: { value: amount },
    });
    fireEvent.change(categoryInput, {
      target: { value: category },
    });
  });
  return { descriptionInput, amountInput, categoryInput };
};
