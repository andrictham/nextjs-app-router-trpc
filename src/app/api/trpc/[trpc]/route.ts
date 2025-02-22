import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { rootRouter } from "@/src/server/rootRouter";

/** App Router specific integration with tRPC.
 *
 * This serves our tRPC procedures under an App Router route handler, allowing our tRPC procedures to be accessed via the following URL: `/api/trpc/routerName`.
 *
 * e.g. `/api/trpc/getTodos` will call the `getTodos` procedure.
 *
 * Because Next.js App Router route handlers use web standards, we can use the vanilla fetch adapter from tRPC, instead of a Next.js-specific adapter, like the one required by Next.js Pages Router.
 */
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: rootRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
