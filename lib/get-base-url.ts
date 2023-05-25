import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.APP_URL ?? `http://localhost:${process.env.PORT ?? 3000}`
);
