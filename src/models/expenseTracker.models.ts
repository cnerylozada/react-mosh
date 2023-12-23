export interface IProduct {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const categories = [
  { id: "Groceries", value: "Groceries" },
  { id: "Utilities", value: "Utilities" },
  { id: "Entertainment", value: "Entertainment" },
];
