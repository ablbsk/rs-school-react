import { ICharacter } from "./index";

export interface ISearchState {
  query: string;
  characters: ICharacter[];
  isLoading: boolean;
  error: null | string;
}
