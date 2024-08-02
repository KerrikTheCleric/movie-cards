import { ReactElement } from "react";
import "./MovieCard.css";

export default function AddMovie(props: any): ReactElement {

    return (
        <section className="movieCardMainSection roundedComponent">
            <ul className="movieCardComponentList">
                <p className="movieCardComponentListItem">{props.title}</p>
                <p className=" movieCardComponentListItem genreText">{props.genre}</p>
                <p className="movieCardComponentListItem">{props.description}</p>
            </ul>
            <p className="topRightRating">{props.rating}/5</p>
        </section>
    )
}