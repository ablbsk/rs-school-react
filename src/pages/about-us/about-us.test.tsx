import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./index";

describe("About Us component", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  );

  it("should have a header", async () => {
    expect(await screen.getByRole("heading", { level: 2 })).toHaveTextContent("About Us");
  });
});
