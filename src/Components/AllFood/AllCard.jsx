/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllCard = ({data}) => {
  const {
    _id,
    img,
    name,
    category,
    price,
    quantity,
  } = data || {};
  return (
    <div>
        <div className="">
          <img className="w-full  rounded-t-lg" src={img} alt="" />
          <div className={"p-4 rounded-b-lg bg-[#D9E5FF]"}>
            <div className="flex justify-between">
            <h3 className={`px-2 bg-[#0034FF33] text-[#0052FF] font-medium w-fit rounded-md`}>
              {category}</h3>
            <h3 className={`px-2 bg-[#0034FF33] text-[#0052FF] font-medium w-fit rounded-md`}>
              Price: {price}</h3>
            </div>
            <div className="flex items-center justify-between">
            <h1 className={`text-lg text-[#0052FF] mt-3 font-semibold`}>
              {name}
            </h1>
            <h3 className={`px-2 text-[#0052FF] font-medium rounded-md`}>
              Quantity: {quantity}</h3>
            </div>
            <Link to={`/fooddetails/${_id}`}>
              <button className="w-full bg-green-500 rounded-lg p-2 mt-3">See Details</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default AllCard;
