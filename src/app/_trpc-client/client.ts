import { createTRPCReact } from "@trpc/react-query";

import { type RootRouter } from "@/src/server/rootRouter";

/**
 * This is our tRPC client, to be used by client components (via `@tanstack/react-query`)
 *
 * We use an underscore prefix (`_trpc-client`) to denote that any files within this folder is a private module to be excluded from Next.js’s file-based routing.
 */
export const trpc = createTRPCReact<RootRouter>({});
