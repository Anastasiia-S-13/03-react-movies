import type { Movie } from "../types/movies";
import axios from "axios";
const myKey = import.meta.env.VITE_TMDB_TOKEN;

export interface MovieHttpResponse {
   results : Movie[];
}

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MovieHttpResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${myKey}`,
      },
    }
  );
  return response.data.results;
}