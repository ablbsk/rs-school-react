import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Notice from "./index";

describe("Notice component", () => {
  beforeEach(() => render(<Notice />));

  it("should have a title", () => {
    expect(screen.getByText("Good news!")).toBeInTheDocument();
  });

  it("should have a subtitle", () => {
    expect(screen.getByText("We have just added your feedback, thanks")).toBeInTheDocument();
  });
});
