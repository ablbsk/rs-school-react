import { ICharacter, IFeedback } from "../interfaces";

export type HomeGridType = {
  elements: ICharacter[];
};

export type CharacterCardType = {
  character: ICharacter;
};

export type FeedbackCardType = {
  feedback: IFeedback;
};

export type FeedbackFormType = {
  addFeedback: (feedback: IFeedback) => void;
};

export type InlineErrorType = {
  message: string;
};
