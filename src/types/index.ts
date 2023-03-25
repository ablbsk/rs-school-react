import { ICharacter } from "../interfaces";

export type GridType = {
  characters: ICharacter[];
};

export type CardType = {
  character: ICharacter;
};

export type ErrorType = {
  message: string | null;
};
