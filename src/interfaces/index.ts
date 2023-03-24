export interface IData {
  readonly info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  readonly results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IFeedback {
  data: IFeedbackFields;
  errors: IFeedbackErrors;
}

export interface IFeedbackFields {
  username: string | null;
  continents: string | null;
  email: string | null;
  dateOfBirth: any | null; // TODO Change type of filed
  picture: string | null;
  rating: string | null;
  opinion: string | null;
  isConfirm: boolean;
}

export interface IFeedbackErrors {
  username: string | null;
  continents: string | null;
  email: string | null;
  dateOfBirth: string | null;
  picture: string | null;
  rating: string | null;
  opinion: string | null;
  isConfirm: string | null;
}
