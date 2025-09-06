import type { Movie } from "../../types/movies";
import css from "./MovieGrid.module.css"


interface MovieGridProps {
    movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
    const MoviesList = movies.map((movie) => {
        return <li key={movie.id}>
            <div className={css.card}>
                <img
                    className={css.image}
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "/fallback-image.jpg"
                    }
                    alt={movie.title}
                    loading="lazy"
                />
                <h2 className={css.title}>{movie.title}</h2>
            </div>
        </li>
    })

    return <ul className={css.grid}>{MoviesList}</ul>
}