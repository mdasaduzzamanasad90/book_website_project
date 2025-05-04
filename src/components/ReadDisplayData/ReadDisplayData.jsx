import PropTypes from "prop-types";
const ReadDisplayData = ({ book }) => {
  const {
    bookName,
    image,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="md:flex items-center border p-5 rounded-xl mb-5">
      <div className="bg-[#1313130D] rounded-xl mr-10">
        <img className="h-60 " src={image} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-xl">{bookName}</h1>
        <p>By : {author}</p>
        <div className="md:flex">
          <p className="font-bold">
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
          <p>Year of Publishing : {yearOfPublishing}</p>
        </div>
        <div>
          <div>
            <p>Publisher : {publisher}</p>
          </div>
          <div>
            <p>Page : {totalPages}</p>
          </div>
        </div>
        <div className="md:flex grid gap-5">
          <button className="btn rounded-xl bg-[#328EFF26] text-[#328EFF]">
            Category : {category}
          </button>
          <button className="btn rounded-xl text-[#FFAC33] bg-[#FFAC3326]">
            Rating : {rating}
          </button>
          <button className="btn rounded-xl bg-[#23BE0A] text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ReadDisplayData.PropTypes = {
  book: PropTypes.object,
};

export default ReadDisplayData;
