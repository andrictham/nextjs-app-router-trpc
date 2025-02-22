import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { rootRouter } from "@/src/server/rootRouter";

/** App Router specific integration with tRPC */
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: rootRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
