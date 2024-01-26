import superjson from "superjson";

export const transformer = superjson;

function getBaseUrl() {
  return process.env.EXPO_PUBLIC_API_URL as string;
}


export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
