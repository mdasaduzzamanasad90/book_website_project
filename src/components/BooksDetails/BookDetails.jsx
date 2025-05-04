import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import {
  getlocalstorgedata,
  localstoragedatabooks,
  wishlistlocaldata,
  wishlistlocalstoragedatabooks,
} from "../utilities/localstorage";

const BookDetails = () => {
  const bookdetailsdata = useLoaderData();
  const notify = () => toast.success("This Book You Read ! Successfully");
  const notify1 = () => toast.success("This Book Add Wishlist ! Successfully");
  const notify2 = () => toast.error("Sorry ! You Have Already Read");
  const notify3 = () => toast.error("Sorry ! You Have Already Add Wishlist");

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = bookdetailsdata.find((job) => job.bookId === idInt);
  const {
    bookName,
    author,
    image,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = job;

  const readbuttonclick = () => {
    const data = getlocalstorgedata();
    const exgest = data.find(book => book === id);
    if (exgest) {
      notify2();
    }
    else{
      localstoragedatabooks(id);
      notify();
    }

  };
  const wishlistbuttonclick = () => {
    const data = getlocalstorgedata();
    const exgest = data.find(book => book === id);
    const wishdata = wishlistlocaldata();
    const wishexgest = wishdata.find(book=>book ===id);
    if (exgest) {
      notify2();
    }
    else if (wishexgest) {
      notify3()
    }
    else{
      wishlistlocalstoragedatabooks(id);
      notify1();
    }

  };

  return (
    <div className="md:flex items-center md:mt-20 mt-10">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className="border-b">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <p>By : {author}</p>
        </div>
        <p className="border-b">Fiction</p>
        <p>Review : {review}</p>
        <p>
          Tag :
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23BE0A0D] text-[#23BE0A] text-sm px-2 rounded-lg mx-2"
            >
              #{tag}
            </span>
          ))}
        </p>
        <div className="border-t">
          <div className="w-80">
            <div className="flex justify-between">
              <p>Number of Pages : </p>
              <p className="ml-5">{totalPages}</p>
            </div>
            <div className="flex justify-between">
              <p>Publisher : </p>
              <p className="ml-5">{publisher}</p>
            </div>
            <div className="flex justify-between">
              <p>Year of Publishing : </p>
              <p className="ml-5">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between">
              <p>Rating : </p>
              <p className="ml-5">{rating}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <button onClick={readbuttonclick} className="btn">
            Read
          </button>
          <button onClick={wishlistbuttonclick} className="btn">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default BookDetails;
