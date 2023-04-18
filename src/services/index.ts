import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICharacter, IEpisode } from "../interfaces";

export const apiBase = "https://rickandmortyapi.com/api/";

export const fetchCharactersByQuery = createAsyncThunk(
  "fetchCharactersByQuery",
  async (query: string) => {
    const response: Response = await fetch(`${apiBase}character/?name=${query}`);
    return response.json();
  }
);

const getIndex = (episode: string): number => {
  return parseInt(episode.slice(episode.lastIndexOf("/") + 1), 10);
};

const filterData = (obj: IEpisode) => {
  return { episode: obj.episode, name: obj.name, airDate: obj.air_date };
};

export const fetchCharacterWithEpisodes = createAsyncThunk(
  "fetchCharacterWithEpisodes",
  async (id: number) => {
    const characterResponse: Response = await fetch(`${apiBase}character/${id}`);
    const character: ICharacter = await characterResponse.json();

    const firstResponse: Response = await fetch(
      `${apiBase}episode/${getIndex(character.episode[0])}`
    );
    const firstEpisode = await firstResponse.json();

    if (character.episode.length > 1) {
      const secondResponse: Response = await fetch(
        `${apiBase}episode/${getIndex(character.episode[character.episode.length - 1])}`
      );
      const secondEpisode = await secondResponse.json();
      const episodes = [filterData(firstEpisode), filterData(secondEpisode)];

      return { character, episodes };
    }

    const episodes = [filterData(firstEpisode)];

    return { character, episodes };
  }
);
