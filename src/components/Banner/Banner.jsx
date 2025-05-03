import { Link } from "react-router-dom";
import img from "../../assets/bookcoverpage-removebg-preview.png";
const Banner = () => {
  return (
    <div className="rounded-xl md:text-left  md:flex flex-column text-center items-center justify-between bg-[#1313130D] md:px-20 md:mt-16 mt-8 py-10">
      <div>
        <h1 className="font-bold md:text-5xl text-3xl">
          Books to freshen <br />
          up your bookshelf
        </h1>
        <Link to="/listedbooks">
          <button className="btn bg-[#23BE0A] text-white rounded-lg font-bold text-base md:mt-10 mt-5">
            View The List
          </button>
        </Link>
      </div>
      <div className="">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
