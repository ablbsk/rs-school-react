import { describe, it } from "vitest";
import { fireEvent, render, renderHook } from "@testing-library/react";
import React from "react";
import HomeGrid from "./index";
import charactersData from "../../../../test/character-data.json";
import { ICharacter } from "../../../interfaces";

describe("Home grid component", async () => {
  const characters: ICharacter[] = charactersData.results;

  it("should have not results", async () => {
    const { container } = render(<HomeGrid elements={[]} />);
    expect(container.getElementsByClassName("home-grid__header").length).toBe(1);
  });

  it("should have results", async () => {
    const { container } = render(<HomeGrid elements={characters} />);
    expect(container.getElementsByClassName("character-card").length).toBe(characters.length);
  });

  // it("when user open character modal", async () => {
  //   const { container } = render(<HomeGrid elements={characters} />);
  //   const cardHeader = container.querySelectorAll(".character-card__header")[0] as HTMLElement;
  //   fireEvent.click(cardHeader);
  //   expect(container.getElementsByClassName("shadow").length).toBe(1);
  // });

  // const setState = jest.fn();
  // jest
  //   .spyOn(React, 'useState')
  //   .mockImplementationOnce(initState => [initState, setState])
});
