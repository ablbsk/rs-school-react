import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterModal from "./index";

const data = {
  character: {
    id: 101,
    name: "E. Coli",
    status: "Dead",
    species: "Disease",
    type: "",
    gender: "unknown",
    origin: {
      name: "Anatomy Park",
      url: "https://rickandmortyapi.com/api/location/5",
    },
    location: {
      name: "Anatomy Park",
      url: "https://rickandmortyapi.com/api/location/5",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/3"],
    url: "https://rickandmortyapi.com/api/character/101",
    created: "2017-12-01T12:03:31.433Z",
  },
  episodes: [{ episode: "S01E03", name: "Anatomy Park", airDate: "December 16, 2013" }],
};

describe("Character modal component", () => {
  const { character } = data;

  beforeEach(() =>
    render(<CharacterModal characterWithEpisodes={data} closeModal={() => false} />)
  );

  it("should have a name", () => {
    expect(screen.getByText(character.name)).toBeInTheDocument();
  });

  it("should have a gender", () => {
    expect(screen.getByText(character.gender)).toBeInTheDocument();
  });

  it("should have an image", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
  });

  it("should have a species", () => {
    expect(screen.getByText(character.species)).toBeInTheDocument();
  });

  it("should have a status", () => {
    expect(screen.getByText(character.status)).toBeInTheDocument();
  });
});
