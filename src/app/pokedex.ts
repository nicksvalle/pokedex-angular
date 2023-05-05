export interface Results {
  name: string;
  url: string;
}

export interface Pokedex {
  front_default: string;
  count: number;
  next: string;
  previous: string;
  results: Results[];
}
