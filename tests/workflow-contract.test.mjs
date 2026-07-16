import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const workflow = readFileSync(new URL("../.github/workflows/publish-windows.yml", import.meta.url), "utf8");

describe("Windows release workflow", () => {
  it("treats a missing first release as normal control flow", () => {
    assert.doesNotMatch(workflow, /gh release view/);
    assert.match(workflow, /Invoke-RestMethod/);
    assert.match(workflow, /exists=/);
  });
});
