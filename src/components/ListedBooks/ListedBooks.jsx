import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getlocalstorgedata,
  wishlistlocaldata,
} from "../utilities/localstorage";
import ReadDisplayData from "../ReadDisplayData/ReadDisplayData";
import WishlistDisplayData from "../WishlistDisplayData/WishlistDisplayData";

const ListedBooks = () => {
  const jsondata = useLoaderData();

  const [displalybook, setdisplaybook] = useState([]);
  const [displaywishlist, setdisplaywishlist] = useState([]);

  useEffect(() => {
    const readdata = getlocalstorgedata();
    const wishlistdata = wishlistlocaldata();

    if (jsondata.length > 0) {
      const readbook = [];
      const wishlistbook = [];

      // readbook
      for (const id of readdata) {
        const inint = parseInt(id);
        const book = jsondata.find((book) => book.bookId === inint);

        if (book) {
          readbook.push(book);
        }
      }
      // wishlist
      for (const id of wishlistdata) {
        const wishidint = parseInt(id);
        const wishbook = jsondata.find((book) => book.bookId === wishidint);
        if (wishbook) {
          wishlistbook.push(wishbook);
        }
      }
      // readbook item and wishlishbook item not same item hear
      const notonly = wishlistbook.filter(item => !readbook.includes(item));
      
      setdisplaybook(readbook);
      setdisplaywishlist(notonly);
    }
  }, [jsondata]);
  // read button click
  const readbook = () => {
    const buttonreadbook = document.getElementById("buttonreadbook");
    buttonreadbook.classList.add("bg-[#23BE0A]");
    buttonreadbook.classList.add("text-white");

    const wishlist = document.getElementById("wishlistbook");
    wishlist.classList.add("hidden");

    const readbook = document.getElementById("readbook");
    readbook.classList.remove("hidden");

    const whis = document.getElementById("buttonwishlishbook");
    whis.classList.remove("bg-[#23BE0A]");
    whis.classList.remove("text-white");
  };
  // wishlist button click
  const wishlistbook = () => {
    const buttonreadbook = document.getElementById("buttonreadbook");
    buttonreadbook.classList.remove("bg-[#23BE0A]");
    buttonreadbook.classList.remove("text-white");

    const wishlist = document.getElementById("wishlistbook");
    wishlist.classList.remove("hidden");

    const readbook = document.getElementById("readbook");
    readbook.classList.add("hidden");

    const whis = document.getElementById("buttonwishlishbook");
    whis.classList.add("bg-[#23BE0A]");
    whis.classList.add("text-white");
  };

  return (
    <div>
      <div className="bg-[#1313130D] md:py-8 py-4 md:mt-16 mt-8 rounded-xl">
        <h1 className="text-center font-bold text-4xl">Books</h1>
      </div>
      <div className="text-center my-5 md:my-10">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white rounded-lg"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-5 flex my-5">
        <button
          onClick={readbook}
          id="buttonreadbook"
          className="btn bg-[#23BE0A] text-white"
        >
          Read Books
        </button>
        <button onClick={wishlistbook} id="buttonwishlishbook" className="btn">
          Wishlist Books
        </button>
      </div>
      <div id="readbook">
        {displalybook.map((book) => (
          <ReadDisplayData key={book.bookId} book={book}></ReadDisplayData>
        ))}
      </div>
      <div id="wishlistbook" className="hidden">
        {displaywishlist.map((book) => (
          <WishlistDisplayData
            key={book.bookId}
            book={book}
          ></WishlistDisplayData>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
