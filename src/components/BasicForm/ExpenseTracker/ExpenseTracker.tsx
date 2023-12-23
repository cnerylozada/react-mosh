import { useState } from "react";
import { BasicForm } from "../BasicForm";

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

export const ExpenseTracker = () => {
  const [products, setProducts] = useState<IProduct[]>([
    { id: 1, amount: 25, category: "Groceries", description: "P1" },
    { id: 2, amount: 25, category: "Utilities", description: "P2" },
    { id: 3, amount: 25, category: "Groceries", description: "P3" },
    {
      id: 4,
      amount: 25,
      category: "Entertainment",
      description: "P4",
    },
  ]);
  const [categorySelected, setCategorySelected] = useState("");

  const onFilter = (_: IProduct) =>
    categorySelected === "" ? true : _.category === categorySelected;

  return (
    <div>
      <BasicForm setProduct={setProducts} />
      <div>ExpenseTracker</div>
      <div>
        <select
          onChange={(e) => {
            setCategorySelected(e.target.value);
          }}
        >
          <option value="">All</option>
          {categories.map((_) => (
            <option key={_.id} value={_.id}>
              {_.value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.filter(onFilter).map((_) => {
              return (
                <tr key={_.id}>
                  <td>{_.id}</td>
                  <td>{_.description}</td>
                  <td>{_.amount}</td>
                  <td>{_.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        setProducts((products) =>
                          products.filter((item) => item.id !== _.id)
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          {!products?.filter(onFilter).length && "There is no products to show"}
        </div>
      </div>
    </div>
  );
};
