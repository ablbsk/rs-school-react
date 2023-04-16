import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import Search from "./index";

const setup = () => {
  const { container } = render(
    <Search search="morty" setSearch={vi.fn()} setIndicator={vi.fn()} />
  );
  const searchInput = container.querySelector(".search__input") as HTMLInputElement;
  const searchButton = container.querySelector(".search__button") as HTMLButtonElement;
  return { searchInput, searchButton, container };
};

describe("Index component", async () => {
  it("should have important elements", async () => {
    const { container } = setup();
    expect(container.getElementsByClassName("search").length).toBe(1);
    expect(container.getElementsByClassName("search__button").length).toBe(1);
  });
});
