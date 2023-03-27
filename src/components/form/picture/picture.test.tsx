import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Picture from "./index";

describe("Picture in form component", () => {
  it("should not have an error", () => {
    const { container } = render(<Picture error={null} />);
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
