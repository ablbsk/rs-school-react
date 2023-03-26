import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Radio from "./index";

describe("Radio in form component", () => {
  it("should not have an error", () => {
    const { container } = render(<Radio error={null} />);
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
