import { ICharacter, IFeedback } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
};

export type FeedbackFormType = {
  addFeedback: (feedback: IFeedback) => void;
};

export type ErrorType = {
  message: string;
};

export type FeedbackCardType = {
  feedback: IFeedback;
};
