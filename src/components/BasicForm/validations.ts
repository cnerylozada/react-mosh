import { z } from "zod";

export const validations = z.object({
  name: z.string().min(1, "Required"),
  age: z
    .number({ invalid_type_error: "Only integers" })
    .int()
    .min(18, "At least 18 years")
    .max(35, "At most 35 years"),
});

export type BasicFormType = z.infer<typeof validations>;
