import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./index";

describe("Home component", async () => {
  it("should have search", async () => {
    const { container } = render(<Home />);
    expect(container.getElementsByClassName("search").length).toBe(1);
  });
  it("should have search button", async () => {
    render(<Home />);
    expect(screen.getByRole("button")).toHaveClass("search__button");
  });
});
