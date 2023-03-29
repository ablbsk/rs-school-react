import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import InlineError from "./index";

describe("Textarea in form component", () => {
  it("should have an inlineError", () => {
    render(<InlineError message="Empty value" />);
    expect(screen.getByText("Empty value")).toBeInTheDocument();
  });
});
