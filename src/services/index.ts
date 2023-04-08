import { ICharactersResponse, ICharacter } from "../interfaces";

const apiBase = "https://rickandmortyapi.com/api/";

export const getCharactersByQuery = async (query: string): Promise<ICharactersResponse> => {
  try {
    const response: Response = await fetch(`${apiBase}character/?name=${query}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};

export const getCharacterById = async (id: number): Promise<ICharacter> => {
  try {
    const response: Response = await fetch(`${apiBase}character/${id}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};

export const getEpisodeById = async (id: number): Promise<any> => {
  try {
    const response: Response = await fetch(`${apiBase}episode/${id}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
