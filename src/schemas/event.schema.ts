import { z } from "zod";
import { mongooseZodCustomType as ctype } from "mongoose-zod";

export const EventSchema = z.object({
    name: z.string().min(2).max(50),
    date: z.date(),
    location: z.string().min(2).max(50),

    // participants should reference the User type
    participants: ctype("ObjectId").array(),

    // sport should reference the Sport type
    sport: ctype("ObjectId"),
});