import { ICharacter, ICharacterWithEpisodes, IFeedback } from "../interfaces";

export type HomeGridType = {
  elements: ICharacter[];
};

export type CharacterCardType = {
  character: ICharacter;
  openModal: (isShow: boolean, id: number) => void;
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

export type ShadowType = {
  closeModal: () => void;
};

export type InlineErrorType = {
  message: string;
};
