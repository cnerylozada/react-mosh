import { fireEvent, act } from "@testing-library/react";
import { Screen, queries } from "@testing-library/dom/types";

export const fillOuTBasicForm = async (screen: Screen<typeof queries>) => {
  const descriptionInput = screen.getByLabelText(/Description/i);
  const amountInput = screen.getByLabelText(/Amount/i);
  const categoryInput = screen.getByLabelText(/Category/i);

  await act(() => {
    fireEvent.change(descriptionInput, {
      target: { value: "Mock description" },
    });
    fireEvent.change(amountInput, {
      target: { value: 18 },
    });
    fireEvent.change(categoryInput, {
      target: { value: "Utilities" },
    });
  });
  return { descriptionInput, amountInput, categoryInput };
};
