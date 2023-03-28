import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./index";

describe("Home component", () => {
  beforeEach(() => render(<Home />));

  it("search should have placeholder", () => {
    expect(screen.getByPlaceholderText("What do you want to find?")).toBeDefined();
  });
});
