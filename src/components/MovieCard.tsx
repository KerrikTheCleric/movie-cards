import { ReactElement } from "react";
import { IMovieCardData } from "../interfaces";
import "./MovieCard.css";

interface IMovieCardProps {
    movie: IMovieCardData;
    onClick: (movie: IMovieCardData) => void;
  }

export default function AddMovie({ movie, onClick }: IMovieCardProps): ReactElement {

    return (
        <section className="movieCardMainSection roundedComponent" onClick={() => onClick(movie)}>
            <ul className="movieCardComponentList">
                <p className="movieCardComponentListItem">{movie.title}</p>
                <p className=" movieCardComponentListItem genreText">{movie.genre}</p>
                <p className="movieCardComponentListItem">{movie.description}</p>
            </ul>
            <p className="topRightRating">{movie.rating}/5</p>
        </section>
    )
}