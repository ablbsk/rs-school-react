import { ICharacter, IFeedbackFields } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
};

export type FormType = {
  addFeedback: (feedback: IFeedbackFields) => void;
};

export type FormValues = {
  username: string;
  continents: string;
  email: string;
  dateOfBirth: string;
  picture: FileList;
  rating: string;
  opinion: string;
  isConfirm: boolean;
};

export type ErrorType = {
  message: string;
};

export type ItemType = {
  key: string;
  feedback: {
    username: string | null;
    continents: string | null;
    email: string | null;
    dateOfBirth: string | null;
    picture: string;
    rating: string | null;
    opinion: string | null;
    isConfirm: boolean;
  };
};
