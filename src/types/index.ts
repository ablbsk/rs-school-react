import { ICharacter, ICharacterWithEpisodes, IFeedback } from "../interfaces";

export type HomeGridType = {
  elements: ICharacter[];
};

export type CharacterCardType = {
  character: ICharacter;
  openModal: (id: number) => void;
};

export type CharacterModalType = {
  characterWithEpisodes: ICharacterWithEpisodes;
  closeModal: () => void;
};

export type FeedbackCardType = {
  feedback: IFeedback;
};

export type FeedbackFormType = {
  addFeedback: (feedback: IFeedback) => void;
};

export type SearchType = {
  setCharacters: (data: ICharacter[]) => void;
  setLoading: (value: boolean) => void;
};

export type ShadowType = {
  closeModal: () => void;
};

export type SpinnerType = {
  isAbsolute: boolean;
};

export type InlineErrorType = {
  message: string;
};
