import { ICharacter, IFeedback } from "./index";

export interface ISearchState {
  query: string;
  characters: ICharacter[];
  isLoading: boolean;
  error: null | string;
}

export interface IFeedbackState {
  list: IFeedback[];
}
