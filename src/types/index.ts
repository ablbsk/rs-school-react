import { ReactNode } from "react";
import { ICharacter, IFeedback } from "../interfaces";

export type HomeGridType = {
  elements: ICharacter[];
};

export type CharacterCardType = {
  character: ICharacter;
  openModal: (isShow: boolean, character: ICharacter) => void;
};

export type CharacterModalType = {
  character: ICharacter;
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
