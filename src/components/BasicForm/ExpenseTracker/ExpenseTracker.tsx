import { useState } from "react";
import { BasicForm } from "../BasicForm";

export interface IProduct {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const ExpenseTracker = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <div>
      <BasicForm setProduct={setProducts} />
      <div>ExpenseTracker</div>
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
            {products?.map((_) => {
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
        {!products?.length && <div>There is no products to show</div>}
      </div>
    </div>
  );
};
