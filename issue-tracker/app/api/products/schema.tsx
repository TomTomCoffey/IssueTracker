import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(100),
  price: z.number().int().positive().min(1).max(10000),
});

export default schema;
