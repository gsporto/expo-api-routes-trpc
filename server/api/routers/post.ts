import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      await sleep(20000);
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
