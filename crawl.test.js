import { expect, test, describe } from "vitest";
import { normalizeUrl } from "./crawl.js";

describe("normalize url", () => {
  test("https url", () => {
    const results = normalizeUrl("https://test.com/path");
    expect(results).toBe("test.com/path");
  });

  test("http url", () => {
    const results = normalizeUrl("http://test.com/path");
    expect(results).toBe("test.com/path");
  });

  test("url with trailing slash", () => {
    const results = normalizeUrl("https://test.com/path/");
    expect(results).toBe("test.com/path");
  });

  test("url with with params", () => {
    const results = normalizeUrl("https://test.com/path?limit=1");
    expect(results).toBe("test.com/path");
  });

  test("url with sub domain", () => {
    const results = normalizeUrl("https://blog.test.com/path?limit=1");
    expect(results).toBe("blog.test.com/path");
  });
});
