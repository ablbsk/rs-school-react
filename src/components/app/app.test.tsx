import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import App from "./app";
import { store } from "../../store";

describe("App component", async () => {
  it("Should render Home page", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("The Rick and Morty");
  });

  it("Should render Not Found page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/404"]}>
        <App />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName("not-found").length).toBe(1);
  });

  it("Should render Not Found page with wrong route", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/wrong-rout-example"]}>
        <App />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName("not-found").length).toBe(1);
  });

  it("Should render About Us page", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/about-us"]}>
        <App />
      </MemoryRouter>
    );
    expect(container.getElementsByClassName("about-us").length).toBe(1);
  });

  it("Should render Feedback page", async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/feedback"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(container.getElementsByClassName("feedback").length).toBe(1);
  });
});
