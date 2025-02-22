import { initTRPC } from "@trpc/server";

/** Initialize tRPC */
const t = initTRPC.create();

/** Export a tRPC router builder method to be used elsewhere */
export const createRouter = t.router;

/** Export a tRPC procedure builder method for creating procedures that are public and can be called without authentication */
export const createPublicProcedure = t.procedure;
