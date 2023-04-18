import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import NotFound from "./index";

describe("Not Found component", () => {
  it("should have image", () => {
    render(<NotFound />);
    expect(screen.getByRole("img")).toHaveClass("not-found__img");
  });
});
