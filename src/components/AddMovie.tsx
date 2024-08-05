import { ReactElement, useState } from "react";
import "./AddMovie.css";
import { IMovieCardData } from "../interfaces";
import MovieList from "./MovieList";

export default function AddMovie(): ReactElement {

    const [titleInputValue, setTitleInputValue] = useState('');
    const [ratingInputValue, setRatingInputValue] = useState('3');
    const [genreInputValue, setGenreInputValue] = useState('Action');
    const [descriptionInputValue, setDescriptionInputValue] = useState('');
    const [movieCards, setMovieCards] = useState<IMovieCardData[]>([]);


    const handleTitleInputChange = (event: any) => {
        setTitleInputValue(event.target.value);
    };

    const handleRatingInputChange = (event: any) => {
        setRatingInputValue(event.target.value);
    };

    const handleGenreInputChange = (event: any) => {
        setGenreInputValue(event.target.value);
    };

    const handleDescriptionInputChange = (event: any) => {
        setDescriptionInputValue(event.target.value);
    };

    function addButtonEvent() {

        const movieCardData: IMovieCardData = {
            title:  titleInputValue,
            rating: Number(ratingInputValue),
            genre: genreInputValue,
            description: descriptionInputValue
           };

        setMovieCards([...movieCards, movieCardData]);
      }
    

    function cardClickEvent(movie: IMovieCardData){
        setMovieCards(movieCards.filter((m) => m !== movie));
    }
      
    return (
        <div>
            <section className="addMovieMainSection roundedComponent">
                <form action="">
                    <ul className="addMovieComponentList">
                        <li className="addMovieComponentListItem">
                            <label htmlFor="titleInput">Title</label>
                            <input className="roundedComponent" type="text" name="" id="titleInput" value={titleInputValue} onChange={handleTitleInputChange} />
                        </li>
                        <li className="addMovieComponentListItem">
                            <label htmlFor="ratingInput">Rating</label>
                            <input type="range" name="" id="ratingInput" min="0" max="5" value={ratingInputValue} onChange={handleRatingInputChange} />
                        </li>
                        <li className="addMovieComponentListItem ">
                            <label htmlFor="genreSelect">Genre</label>
                            <select className="roundedComponent" name="" id="genreSelect" value={genreInputValue} onChange={handleGenreInputChange}>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animated">Animated</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Historical">Historical</option>
                                <option value="Horror">Horror</option>
                                <option value="Musical">Musical</option>
                                <option value="Noir">Noir</option>
                                <option value="Romance">Romance</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Western">Western</option>
                            </select>
                        </li>
                        <li className="addMovieComponentListItem">
                            <label htmlFor="descriptionInput">Description</label>
                            <textarea className="roundedComponent" name="" id="descriptionInput" value={descriptionInputValue} onChange={handleDescriptionInputChange}></textarea>
                        </li>
                    </ul>
                    <button className="roundedComponent">Clear</button>
                    <button className="roundedComponent" type="button" onClick={() => addButtonEvent()}> Add </button>
                </form>
            </section>
            <MovieList movies={movieCards} onMovieClick={cardClickEvent} />
        </div>
    )
}