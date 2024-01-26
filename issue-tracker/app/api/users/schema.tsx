import { z } from "zod";

const schemea = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  // age: z.number().int().positive().min(18).max(120),
});

export default schemea;
