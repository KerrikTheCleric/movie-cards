import { ReactElement } from "react";
import AddMovie from "./components/AddMovie";
//import MovieCard from "./components/MovieCard";

export function App(): ReactElement {
  return (
    <>
      <AddMovie/>
      {/* <MovieCard title="Der Movie Film" genre="Comedy" rating="2" description="Oh no, I made ze bad film."/>
      <MovieCard title="Moby Dick Rides Again" genre="Science Fiction" rating="4" description="Description which is very long so god help me order this text or I fear this is the end Captain Ahab."/> */}
    </>
  );
}
