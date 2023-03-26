import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Select from "./index";

describe("Select in form component", () => {
  it("should have an error", () => {
    render(<Select error="error" />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  it("should not have an error", () => {
    const { container } = render(<Select error={null} />);
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
