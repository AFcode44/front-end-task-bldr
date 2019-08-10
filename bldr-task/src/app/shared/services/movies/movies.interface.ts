export interface MoviesInterface {
  actors: Array<ActorInterface>;
  director: string;
  genres: Array<string>;
  imbdId: string;
  metascore: number;
  posterUrl: string;
  title: string;
  year: number;
}

export interface ActorInterface {
  imbdId: string;
  name: string;
}