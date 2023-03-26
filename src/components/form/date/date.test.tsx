import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Date from "./index";

describe("Textarea in form component", () => {
  it("should have an error", () => {
    render(<Date error="Empty value" />);
    expect(screen.getByText("Empty value")).toBeInTheDocument();
  });

  it("should not have an error", () => {
    const { container } = render(<Date error={null} />);
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
