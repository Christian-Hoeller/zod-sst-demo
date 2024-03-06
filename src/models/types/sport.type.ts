import { z } from "zod";
import { SportSchema } from "../schemas/sport.schema";

export type Sport = z.infer<typeof SportSchema>;