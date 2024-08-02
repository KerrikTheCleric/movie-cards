import { ReactElement } from "react";
import AddMovie from "./components/AddMovie";
import MovieCard from "./components/MovieCard";

export function App(): ReactElement {
  return (
    <>
      <AddMovie/>
      <MovieCard/>
    </>
  );
}
