import React, { Ref } from "react";
import { ICharacter, IFeedbackErrors, IFeedbackFields } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
};

export type FormType = {
  formRef: Ref<HTMLFormElement>;
  errors: IFeedbackErrors;
  isButtonActive: boolean;
  isNoticeShow: boolean;
  isFormConfirm: (e: React.MouseEvent<HTMLInputElement>) => void;
  addFeedback: (feedback: IFeedbackFields) => void;
};

export type FormFieldType = {
  error: string | null;
};

export type InputFiledType = {
  label: string;
  type: string;
  placeholder: string;
  error: string | null;
};

export type ErrorType = {
  message: string | null;
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
