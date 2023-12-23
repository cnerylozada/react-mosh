import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicFormType, validations } from "./validations";

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
            <input type="text" {...register("name")} />
            {errors.name && <div>{errors.name.message}</div>}
          </div>
          <div>
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <div>{errors.age.message}</div>}
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
