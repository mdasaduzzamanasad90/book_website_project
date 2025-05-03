import { IoStarOutline } from "react-icons/io5";
const Books = ({ book }) => {
  const { image, bookName, author, tags, rating } = book;
  return (
    <div className="border p-5 h-[480px] rounded-xl hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center bg-[#F3F3F3] rounded-xl">
        <img src={image} alt="book" className="w-52" />
      </div>
      <div className="">
        <p className="my-5 h-10">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23BE0A0D] text-[#23BE0A] text-sm px-3 rounded-xl mr-3 my-4"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="border-b border-dashed font-bold">
          <h2 className="font-bold text-xl mb-2 h-16">{bookName}</h2>
          <p className="mb-3">
            By : <span className="text-[#00000080]">{author}</span>
          </p>
        </div>
        <div className="flex justify-between my-4">
          <h1 className="font-bold">Fiction</h1>
          <div className="flex items-center gap-2">
            {rating}
            <IoStarOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
