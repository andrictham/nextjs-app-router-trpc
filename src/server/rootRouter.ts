import { publicProcedure, router } from "./trpc";

/** This is the root router of our tRPC API.
 *
 * The root router merges all our procedures together to be accessible via `app/api/trpc/[trpc]`. */
export const rootRouter = router({
  getTodos: publicProcedure.query(async () => {
    return ["Buy laundry detergent", "Mop the floors", "Replace air filters"];
  }),
});

/** This type is exported so we can share types between client and server. */
export type RootRouter = typeof rootRouter;
