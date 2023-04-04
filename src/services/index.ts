import { IResponse } from "../interfaces";

const apiBase = "https://rickandmortyapi.com/api/";

export const getCharactersByQuery = async (query: string): Promise<IResponse> => {
  try {
    const response: Response = await fetch(`${apiBase}character/?name=${query}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
