import { expect, test, describe } from "vitest";
import { normalizeUrl } from "./crawl.js";

describe("normalize url", () => {
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
