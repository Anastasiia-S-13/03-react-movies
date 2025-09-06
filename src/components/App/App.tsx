import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import type { Movie } from "../../types/movies";
import { useEffect, useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";
import fetchMovies from "../../services/movieService";

export default function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchWord, setSearchWord] = useState<string>("");

    const handleSearch = async (query: string) => {
        setSearchWord(query);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setMovies([]);

                const response = await fetchMovies(searchWord);
                if (response.length === 0) {
                    return toast.error("No movies found for your request.");
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        if (searchWord.trim() !== "") {
            fetchData();
        }
    }, [searchWord])

   return <div className={css.app}>
       <SearchBar onSubmit={handleSearch} />
       {movies.length === 0 && <Toaster position="top-center"
           reverseOrder={false} />}
       {movies.length > 0 && <MovieGrid movies={movies} />}
    </div>
}