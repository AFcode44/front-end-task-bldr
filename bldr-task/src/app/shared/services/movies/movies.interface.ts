export interface MoviesInterface {
  actors: Array<ActorInterface>;
  director: string;
  genres: Array<string>;
  imdbId: string;
  metascore: number;
  posterUrl: string;
  title: string;
  year: number;
}

export interface ActorInterface {
  imdbId: string;
  name: string;
}
