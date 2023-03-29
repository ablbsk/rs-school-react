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
  username: string;
  continents: string;
  email: string;
  dateOfBirth: string;
  picture: string;
  rating: string;
  opinion: string;
  isConfirm: boolean;
}

export interface IForm {
  username: string;
  continents: string;
  email: string;
  dateOfBirth: string;
  picture: FileList;
  rating: string;
  opinion: string;
  isConfirm: boolean;
}
