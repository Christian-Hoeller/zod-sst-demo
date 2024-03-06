import { z } from "zod";
import { EventSchema, SportSchema, UserSchema } from "../schemas";

export type Event = z.infer<typeof EventSchema>;
export type Sport = z.infer<typeof SportSchema>;
export type User = z.infer<typeof UserSchema>;
