import { publicProcedure, router } from "./trpc";

export const rootRouter = router({
    getTodos: publicProcedure.query(async () => {
        return ["Buy laundry detergent", "Mop the floors", "Replace air filters"];
    }),
});

export type RootRouter = typeof rootRouter;