import { expect, test, describe } from "vitest";
import { normalizeUrl } from "./crawl.js";

test("normalize url", () => {
  describe("Name of the group", () => {
    const results = normalizeUrl("http://test.ca");

    expect(results).toBe("test.caa");
  });
});
