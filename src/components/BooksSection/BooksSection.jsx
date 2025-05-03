import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";

const BooksSection = () => {
  const booksdata = useLoaderData();
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-20 mb-10">Books</h1>
      <div className="grid md:grid-cols-3 gap-5 mb-20">
        {booksdata.map((book) => (
          <Books key={book.bookId} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
