export function normalizeUrl(entryUrl) {
  const url = new URL(entryUrl);
  const pathname = url.pathname.endsWith("/")
    ? url.pathname.slice(0, -1)
    : url.pathname;

  return url.host + pathname;
}
