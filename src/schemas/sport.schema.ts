import * as z from "zod";

export const SportSchema = z.object({
    name: z.string().min(2).max(50),
    players: z.number().min(0).max(50),
    equipment: z.array(z.string()).default([]),
});