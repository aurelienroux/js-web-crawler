import { expect, test, describe } from "vitest";
import { getURLsFromHTML, normalizeUrl } from "./crawl.js";

describe("normalizeUrl", () => {
  test("protocol", () => {
    const results = normalizeUrl("https://test.com/path");
    expect(results).toBe("test.com/path");
  });

  test("trailing slash", () => {
    const results = normalizeUrl("https://test.com/path/");
    expect(results).toBe("test.com/path");
  });

  test("params", () => {
    const results = normalizeUrl("https://test.com/path?limit=1");
    expect(results).toBe("test.com/path");
  });

  test("subdomain", () => {
    const results = normalizeUrl("https://blog.test.com/path?limit=1");
    expect(results).toBe("blog.test.com/path");
  });

  test("capitals", () => {
    const results = normalizeUrl("https://BLOG.test.com/path?limit=1");
    expect(results).toBe("blog.test.com/path");
  });
});

describe("getURLsFromHTML", () => {
  const HtmlFixture = `
  <html>
    <body>
      <p>
        <a href="/contact.html"><span>Go to Boot.dev</span></a>
      </p>
      <a href="https://test.com"><span>Go to Boot.dev</span></a>
      <aside>
        <a href="/profile/edit.html"><span>Go to Boot.dev</span></a>
      </aside>
    </body>
  </html>
  `;

  test("should find all links", () => {
    const results = getURLsFromHTML(HtmlFixture, "https://test.com");

    expect(results.length).toBe(3);
  });

  test("should change all relative links to absolute", () => {
    const pattern = "https://test.com";
    const results = getURLsFromHTML(HtmlFixture, pattern);

    results.forEach((href) => {
      expect(href).toMatch(pattern);
    });
  });
});
