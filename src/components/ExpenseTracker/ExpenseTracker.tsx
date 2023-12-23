import { useState } from "react";
import { BasicForm } from "../BasicForm/BasicForm";
import { IProduct, categories } from "../../models/expenseTracker.models";

export const ExpenseTracker = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorySelected, setCategorySelected] = useState("");

  const onFilter = (_: IProduct) =>
    categorySelected === "" ? true : _.category === categorySelected;

  return (
    <div>
      <BasicForm setProduct={setProducts} />
      <div>ExpenseTracker</div>
      <div>
        <select
          data-testid="categorySelect"
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
                <tr key={_.id} data-testid="product">
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
        <div data-testid="noProductsMessage">
          {!products?.filter(onFilter).length && "There is no products to show"}
        </div>
      </div>
    </div>
  );
};
