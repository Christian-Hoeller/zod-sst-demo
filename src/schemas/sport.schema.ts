import { z } from "zod";

export const SportSchema = z
  .object({
    name: z.string().min(2).max(50).openapi({
      description: "Name of the sport",
      example: "Basketball",
    }),
    players: z.number().min(0).max(50).openapi({
      description: "Number of players in the sport",
      example: 10,
    }),
    equipment: z.array(z.string()).openapi({
      description: "Equipment used in the sport",
      example: ["ball", "net"],
    }),
  })
  .openapi("Sport");
