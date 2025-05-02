import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Movie } from "./Movie/Movie";
import { Contact, contactData } from "./Contact/Contact";
import { AppLayout } from "./layout/Applayout";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { GetMovieData } from "./api/GetMovieData";
import { MovieDetails } from "./Movie/MovieDetails";
import { getMovieDetails } from "./api/getMovieDetails";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetMovieData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
