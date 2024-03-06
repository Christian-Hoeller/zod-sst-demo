import { z } from "zod";
import { mongooseZodCustomType as ctype } from "mongoose-zod";

export const EventSchema = z.object({
    name: z.string().min(2).max(50),
    date: z.string(),
    // participants should reference the User type
    participants: ctype("ObjectId").array(),
    location: z.string().min(2).max(50),
});