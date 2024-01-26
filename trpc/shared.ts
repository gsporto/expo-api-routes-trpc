import superjson from "superjson";

export const transformer = superjson;
import Constants from "expo-constants";

function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (Constants?.expoConfig?.hostUri) return Constants.expoConfig.hostUri;
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
