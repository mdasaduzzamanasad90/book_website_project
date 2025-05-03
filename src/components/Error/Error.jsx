import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>oooops!!</h1>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default Error;
