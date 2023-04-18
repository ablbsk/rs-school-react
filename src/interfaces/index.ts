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

export interface ICharacterWithEpisodes {
  character: ICharacter;
  episodes: ICharacterEpisode[];
}

export interface ICharacterEpisode {
  episode: string;
  name: string;
  airDate: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IFeedback {
  username: string;
  continents: string;
  email: string;
  birthday: string;
  picture: string;
  rating: string;
  opinion: string;
  isConfirm: boolean;
}

export interface IFeedbackForm {
  username: string;
  continents: string;
  email: string;
  birthday: string;
  picture: FileList;
  rating: string;
  opinion: string;
  isConfirm: boolean;
}
