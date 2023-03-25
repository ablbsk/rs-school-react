import { ICharacter } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
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
