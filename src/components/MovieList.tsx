import { ReactElement } from "react";
import { IMovieCardData } from "../interfaces";
import MovieCard from "./MovieCard";

interface IMovieListProps {
    movies: IMovieCardData[];
    onMovieClick: (movie: IMovieCardData) => void;
}

export default function MovieList({ movies, onMovieClick }: IMovieListProps): ReactElement {

    const movieCardsToRender = movies.map((movie) =>
        <MovieCard movie={movie} onClick={onMovieClick} key={crypto.randomUUID()} />
    );

    return (
        <section>
            {movieCardsToRender}
        </section>
    )
}