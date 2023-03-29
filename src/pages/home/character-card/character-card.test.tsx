import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterCard from "./index";
import data from "../../../data/data.json";

describe("Card component", () => {
  const character = data.results[0];

  beforeEach(() => render(<CharacterCard character={character} />));

  it("should have an image", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
  });

  it("should have a name", () => {
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(character.name);
  });

  it("should have a gender", () => {
    expect(screen.getByText(character.gender)).toBeInTheDocument();
  });

  it("should have a status", () => {
    expect(screen.getByText(character.status)).toBeInTheDocument();
  });

  it("should have a species", () => {
    expect(screen.getByText(character.species)).toBeInTheDocument();
  });

  it("should have a location", () => {
    expect(screen.getByText(character.location.name)).toBeInTheDocument();
  });
});
