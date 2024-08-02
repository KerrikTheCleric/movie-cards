import { ReactElement } from "react";
import { useState } from 'react';


import "./MovieCard.css";

export default function AddMovie(): ReactElement {

    return (
        <section className="movieCardMainSection roundedComponent">

            <ul className="movieCardComponentList">
                <p className="movieCardComponentListItem">Movie Title</p>
                {/* <span className="invisibleFiller">Filler</span> */}
                <p className=" movieCardComponentListItem genreText">Science Fiction</p>

                <p className="movieCardComponentListItem">Description which is very long so god help me order or I fear this is the end captain ahab</p>
            </ul>
            <p className="topRightRating">3/5</p>
            {/* <ul className="movieCardComponentList">
                <p className="invisibleFiller movieCardComponentListItem">Filler</p>
                <p className="genreText">Science Fiction</p>
            </ul> */}


            {/* <p className="topLeft">Movie Title</p>
            <p className="topRight">3/5</p>
            <p className="topRight-second">Genre</p>
            <ul className="movieCardComponentList  ">
            <p className="">Genre</p>
            <span>d</span>
                <p className="topLeft-second">Description here for display purposes please fix okay pdld shf  skskd ho the s.a djdos md   s,, sbidsiks  dhdks </p>
            </ul> 
            
            <p className="justify-start">Movie Title</p>
            <p className="justify-start">Genre</p>
            <p className="justify-start">Description</p> 
            <p className="block ">Movie Titlessss</p>
            <p>Genres</p> */}
        </section>


    )
}