import * as z from "zod";

export const UserSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  age: z.number().min(0).max(150),
  hobbies: z.array(z.string()).default([]),
});