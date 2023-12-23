import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicFormType, validations } from "./validations";

const categories = [
  { id: 1, value: "Groceries" },
  { id: 2, value: "Utilities" },
  { id: 3, value: "Entertainment" },
];

export const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BasicFormType>({
    mode: "all",
    resolver: zodResolver(validations),
  });

  const onSubmit: SubmitHandler<BasicFormType> = (data) => console.log(data);

  return (
    <div>
      <div>Basic Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="description">Description</label>
            <div>
              <input
                id="description"
                type="text"
                {...register("description")}
              />
            </div>
            {errors.description && <div>{errors.description.message}</div>}
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <div>
              <input
                id="amount"
                type="number"
                {...register("amount", { valueAsNumber: true })}
              />
            </div>
            {errors.amount && <div>{errors.amount.message}</div>}
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <div>
              <select id="category" {...register("category")} defaultValue={""}>
                <option value={""} disabled>
                  Select
                </option>
                {categories.map((_) => (
                  <option key={_.id} value={_.id}>
                    {_.value}
                  </option>
                ))}
              </select>
              {errors.category && <div>{errors.category.message}</div>}
            </div>
          </div>
        </div>
        <div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
