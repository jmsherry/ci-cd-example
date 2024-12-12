import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test.skip("App Router: Works with dynamic route segments", () => {
  // @ts-expect-error new pages props in Next 15
  render(<Page params={{ slug: "Test" }} />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Slug: Test" }),
  ).toBeDefined();
});
