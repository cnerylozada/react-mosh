import { render, screen } from "@testing-library/react";
import { BasicForm } from "./BasicForm";

describe("BasicForm component", () => {
  it("should save values in inputs", () => {
    const mockSetProduct = vi.fn();
    render(<BasicForm setProduct={mockSetProduct} />);
    const formTitle = screen.getByText(/basic form/i);
    expect(formTitle).toBeInTheDocument();
  });
});
