import { Link } from "react-router-dom";

const CartCard = () => {
  return (
    <div className="flex">
      <img className="w-[200px] rounded-l-lg" src='https://i.ibb.co/2gbqYTD/health1.png' alt="" />
      <div
        
        className="p-5 flex-grow bg-green-400 rounded-r-lg"
      >
        <h3
          className="px-2 bg-blue-500 text-white font-medium w-fit rounded-md"
        >
          category
        </h3>
        <h1 className="text-lg mt-3 font-semibold">title</h1>
        <p
          className="text-white font-semibold"
        >
          $price
        </p>
        <Link to={`/details/${'01'}`}>
          <button
          
            className="py-2 px-3 bg-green-400 rounded-lg text-white font-semibold mt-3"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartCard;
