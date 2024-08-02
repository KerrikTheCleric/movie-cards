import { ReactElement } from "react";
import { useState } from 'react';


import "./AddMovie.css";

export default function AddMovie(): ReactElement {

    const [titleInputValue, setTitleInputValue] = useState('');
    const [ratingInputValue, setRatingInputValue] = useState('3');
    const [genreInputValue, setGenreInputValue] = useState('Action');
    const [descriptionInputValue, setDescriptionInputValue] = useState('');


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

        const movieCard = {
            title:  titleInputValue,
            rating: ratingInputValue,
            genre: genreInputValue,
            description: descriptionInputValue
           };

        console.log(movieCard);
      }

    return (
        <section className="mainSection">
            <form action="">
                <ul className="addMovieComponentList">
                    <li className="addMovieComponentListItem">
                        <label htmlFor="titleInput">Title</label>
                        <input type="text" name="" id="titleInput" value={titleInputValue} onChange={handleTitleInputChange}/>
                    </li>
                    <li className="addMovieComponentListItem">
                        <label htmlFor="ratingInput">Rating</label>
                        <input type="range" name="" id="ratingInput" min="0" max="5" value={ratingInputValue} onChange={handleRatingInputChange} />
                    </li>
                    <li className="addMovieComponentListItem">
                        <label htmlFor="genreSelect">Genre</label>
                        <select name="" id="genreSelect" value={genreInputValue} onChange={handleGenreInputChange}>
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
                    <textarea name="" id="descriptionInput" value={descriptionInputValue} onChange={handleDescriptionInputChange}></textarea>
                    </li>

                </ul>
                <button>Clear</button>
                <button type="button" onClick={() => addButtonEvent()}> Add </button>
            </form>
        </section>
    )
}