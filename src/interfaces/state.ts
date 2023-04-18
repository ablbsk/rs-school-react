import { ICharacter, ICharacterWithEpisodes, IFeedback } from "./index";

export interface IMainState {
  query: string;
  characters: ICharacter[];
  modal: {
    character: ICharacterWithEpisodes | null;
    isLoading: boolean;
  };
  isLoading: boolean;
  error: null | string;
}

export interface IFeedbackState {
  list: IFeedback[];
}
