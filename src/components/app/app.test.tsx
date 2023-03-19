import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import App from "./app";

describe("App", () => {
  it("Renders hello words", () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello world");
  });
});
