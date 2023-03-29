import { ICharacter, IFeedback } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
};

export type FormType = {
  addFeedback: (feedback: IFeedback) => void;
};

export type ErrorType = {
  message: string;
};

export type ItemType = {
  feedback: IFeedback;
};
