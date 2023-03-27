import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Error from "./index";

describe("Textarea in form component", () => {
  it("should have an error", () => {
    render(<Error message="Empty value" />);
    expect(screen.getByText("Empty value")).toBeInTheDocument();
  });

  it("should not have an error", () => {
    const { container } = render(<Error message={null} />);
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
