import * as z from "zod";
import { mongooseZodCustomType as ctype } from "mongoose-zod";

export const UserSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  age: z.number().min(0).max(150),
  sports: ctype("ObjectId").array()
});