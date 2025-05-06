import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";
import Home from "./components/Home/Home";
import BookDetails from "./components/BooksDetails/BookDetails";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("/BookData/BookData.json").then((res) => res.json()),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
        loader: () =>
          fetch("/BookData/BookData.json").then((res) => res.json()),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        loader: () =>
          fetch("/BookData/BookData.json").then((res) => res.json()),
      },
      {
        path: "/pagestoread",
        element: <PagesToRead />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
