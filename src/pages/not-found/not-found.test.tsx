import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import NotFound from "./index";

describe("NotFound component", () => {
  it("should have image", () => {
    render(<NotFound />);
    const { container } = render(<NotFound />);
    expect(container.getElementsByClassName("not-found__img").length).toBe(1);
  });
});
