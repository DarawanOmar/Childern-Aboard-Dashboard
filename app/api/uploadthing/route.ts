import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    token:
      "eyJhcGlLZXkiOiJza19saXZlX2I0MjI2NDNkMDViMGZmOTU4MDBmODRkNDZhNGI5OTg5ODEyZDdiZTBiNjZiMjhkODVjYzNjMjhjOGQxMTdlNjgiLCJhcHBJZCI6Ind3NzYyY2t0cmUiLCJyZWdpb25zIjpbInNlYTEiXX0=",
  },
});
