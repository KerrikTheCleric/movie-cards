import { ReactElement } from "react";
import { IMovieCardData } from "../interfaces";
import MovieCard from "./MovieCard";

//import "./MovieCard.css";

export default function MovieList(props: IMovieCardData[]): ReactElement {

    console.log("Props: " + props);

    /*if(props[0] !== null){
        console.log("Props: " + props[0].genre);
    }*/

    const names = ["Alice", "Bob", "Charlie"];
    //const nameListItems = names.map(name => <li key={name}>{name}</li>);

    /*const newMovieCardData: IMovieCardData[] = {
        [title =]
    }*/

    const movieCardsToRender = props.map((movie) =>
        <MovieCard {...movie}  key={crypto.randomUUID() }/>
    )

    return (
        <section className="">
            <ul className="">
                {movieCardsToRender}
            </ul>
        </section>
    )
}