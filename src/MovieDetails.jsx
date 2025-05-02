import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <>
      <h1>hello movie details page </h1>
    </>
  );
};
