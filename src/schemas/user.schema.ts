import { z } from "zod";
import { mongooseZodCustomType as ctype } from "mongoose-zod";

export const UserSchema = z
  .object({
    first_name: z.string().min(2).max(50).openapi({
      description: "first name of the user",
      example: "Moritz",
    }),

    last_name: z.string().min(2).max(50).openapi({
      description: "last name of the user",
      example: "Hiebl",
    }),

    age: z.number().min(0).max(150).openapi({
      description: "Participants relation",
      example: 23,
    }),

    sport: z.array(ctype("ObjectId")).openapi({
      description: "Participants relation",
    }),
  })
  .openapi("User");
