import { z } from "zod";
import { mongooseZodCustomType as ctype } from "mongoose-zod";

export const EventSchema = z
  .object({
    name: z.string().min(2).max(50).openapi({
      description: "Name of the event",
    }),
    date: z.date().openapi({
      description: "Date of the event",
      example: "2021-12-24:12:00:00",
    }),
    location: z.string().min(2).max(50).openapi({
      description: "Location of the event",
      example: "Austria",
    }),

    // participants should reference the User type
    participants: z
      .array(ctype("ObjectId"))
      .openapi({ description: "Participants relation" }),

    // sport should reference the Sport type
    sport: ctype("ObjectId").openapi({ description: "Sport relation" }),
  })
  .openapi("Event");
