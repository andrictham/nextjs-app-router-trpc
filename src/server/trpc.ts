import { initTRPC } from "@trpc/server";

/** Initialize tRPC */
const t = initTRPC.create();

/** Export a tRPC router builder method to be used elsewhere */
export const router = t.router;

/** Export a tRPC procedure builder method for creating procedures that are public and can be called without authentication */
export const publicProcedure = t.procedure;
