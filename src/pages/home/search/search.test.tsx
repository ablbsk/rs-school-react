import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Search from "./search";

const setup = () => {
  const { container } = render(<Search setCharacters={() => []} setLoading={() => false} />);
  const searchInput = container.querySelector(".search__input") as HTMLInputElement;
  const searchButton = container.querySelector(".search__button") as HTMLButtonElement;
  return { searchInput, searchButton, container };
};

describe("Search component", async () => {
  it("should have input", async () => {
    const { container } = setup();
    expect(container.getElementsByClassName("search").length).toBe(1);
  });
  it("should have arrow button", async () => {
    render(<Search setCharacters={() => []} setLoading={() => false} />);
    expect(screen.getByRole("button")).toHaveClass("search__button");
  });
});

// describe("Search component", async () => {
//   it("user value will written in input", async () => {
//     const { searchInput, searchButton } = setup();
//     fireEvent.change(searchInput, { target: { value: "summer" } });
//     fireEvent.keyPress(searchInput, { key: "Enter", charCode: 13 });
//     fireEvent.keyDown(searchInput, { key: "Enter" });
//     expect(searchInput.value).toBe("summer");
//
//     fireEvent.change(searchInput, { target: { value: "morty" } });
//     fireEvent.click(searchButton);
//     expect(searchInput.value).toBe("morty");
//   });
// });
