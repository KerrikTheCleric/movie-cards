import { ReactElement } from "react";

import "./AddMovie.css";

export default function AddMovie(): ReactElement {
    return (
        <section className="mainSection">
            <form action="">
                <ul className="addMovieComponentList">
                    <li className="addMovieComponentListItem">
                        <label htmlFor="titleInput">Title</label>
                        <input type="text" name="" id="titleInput" />
                    </li>
                    <li className="addMovieComponentListItem">
                        <label htmlFor="ratingInput">Rating</label>
                        <input type="range" name="" id="ratingInput" min="0" max="5" />
                    </li>
                    <li className="addMovieComponentListItem">
                        <label htmlFor="genreSelect">Genre</label>
                        <select name="" id="genreSelect">
                            <option value="">Action</option>
                            <option value="">Adventure</option>
                            <option value="">Animated</option>
                            <option value="">Comedy</option>
                            <option value="">Drama</option>
                            <option value="">Fantasy</option>
                            <option value="">Historical</option>
                            <option value="">Horror</option>
                            <option value="">Musical</option>
                            <option value="">Noir</option>
                            <option value="">Romance</option>
                            <option value="">Science Fiction</option>
                            <option value="">Thriller</option>
                            <option value="">Western</option>
                        </select>
                    </li>
                    <li className="addMovieComponentListItem">
                    <label htmlFor="descriptionInput">Description</label>
                    <textarea name="" id="descriptionInput"></textarea>
                    </li>

                </ul>
                <button>Clear</button>
                <button>Add</button>
            </form>
        </section>
    )
}