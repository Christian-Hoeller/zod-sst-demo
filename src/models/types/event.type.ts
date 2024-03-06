import { z } from "zod";
import { EventSchema } from "../schemas/event.schema";

export type Event = z.infer<typeof EventSchema>;