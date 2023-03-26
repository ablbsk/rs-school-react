import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Input from "./index";

describe("Input in form component", () => {
  it("should not have an error", () => {
    const { container } = render(
      <Input label="Email" placeholder="test@gmail.com" type="email" error={null} />
    );
    expect(container.classList.contains("form__error--active")).toBe(false);
  });
});
