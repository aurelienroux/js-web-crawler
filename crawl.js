import { JSDOM } from "jsdom";

export function normalizeUrl(entryUrl) {
  const url = new URL(entryUrl);
  const pathname = url.pathname.endsWith("/")
    ? url.pathname.slice(0, -1)
    : url.pathname;

  return url.host + pathname;
}

export function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody);
  const link_nodes_array = Array.from(
    dom.window.document.querySelectorAll("a")
  );

  const href_array = link_nodes_array.map((link) => {
    try {
      const complete_url = new URL(link.href, baseURL);

      return complete_url.href;
    } catch (error) {
      console.log("error converting href:", error);
    }
  });

  return href_array;
}
