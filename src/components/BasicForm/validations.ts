import { z } from "zod";

export const validations = z.object({
  description: z.string().min(1, "Required"),
  amount: z
    .number({ invalid_type_error: "Only numbers" })
    .min(10, "At least 10 dollars")
    .max(50, "At most 50 dollars"),
  category: z.string().min(1, "Required"),
});

export type BasicFormType = z.infer<typeof validations>;
