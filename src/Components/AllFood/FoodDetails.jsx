import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
  const id = useParams().id;
  // console.log(id);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/allfood/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  console.log(data);
  const { _id, img, price, origin, madeBy, name, description, category } = data;
  return (
    <div>
      <Helmet>
        <title>Royal Food || Details</title>
      </Helmet>
      <div>
        <div className="md:grid mt-10 md:grid-cols-6">
          <img
            className="w-full border-2 border-green-400 md:col-span-4 md:h-[450px] rounded-lg"
            src={img}
            alt=""
          />
          <div className="md:col-span-2 flex flex-col md:ml-20 justify-center">
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Name: {name}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Price: ${price}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Category: {category}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Made By: {madeBy}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Origion: {origin}
            </h1>

            <Link to={`/purchase/${_id}`}>
              <button className="font-semibold w-full my-3 bg-green-600 rounded-lg py-2 text-white cursor-pointer text-lg">
                Order
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-xl font-semibold border-b-2 border-black pb-5 my-7">
          {name}
        </h1>
        <p className="text-gray-700 mb-10">{description}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
