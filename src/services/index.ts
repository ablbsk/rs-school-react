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

export const getCharacterById = async (id: number): Promise<ICharacter> => {
  try {
    const response: Response = await fetch(`${apiBase}character/${id}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};

export const getEpisodeById = async (id: number): Promise<IEpisode> => {
  try {
    const response: Response = await fetch(`${apiBase}episode/${id}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
