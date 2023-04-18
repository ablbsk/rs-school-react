import { describe, it } from "vitest";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import React from "react";
import HomeGrid from "./index";
import charactersData from "../../../../test/character-data.json";
import { ICharacter } from "../../../interfaces";
import { store } from "../../../store";

describe("Home grid component", async () => {
  const characters: ICharacter[] = charactersData.results;

  it("should have not results", async () => {
    const { container } = render(
      <Provider store={store}>
        <HomeGrid elements={[]} />
      </Provider>
    );
    expect(container.getElementsByClassName("home-grid__header").length).toBe(1);
  });

  it("should have results", async () => {
    const { container } = render(
      <Provider store={store}>
        <HomeGrid elements={characters} />
      </Provider>
    );
    expect(container.getElementsByClassName("character-card").length).toBe(characters.length);
  });
});
