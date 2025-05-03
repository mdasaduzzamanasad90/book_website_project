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
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/BookData/BookData.json"),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/BookData/BookData.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
