import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AllCard from "../AllFood/AllCard";
import Loading from "../Loading";

const TopSixContainer = () => {
  const [data, setData] = useState([]);
  const [IsLoading,setLoading] = useState(true)
  useEffect(() => {
    fetch("https://royal-food-server.vercel.app/api/v1/foodSix")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold">Top Selling Food!</h1>
      {
        IsLoading ? <Loading></Loading>
        :
        <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-5">
        {data?.map((data) => (
          <AllCard data={data} key={data._id}></AllCard>
        ))}
      </div>
      }
      <div className="flex justify-center">
        <Link to={"allfood"}>
          <button className="text-center p-2 px-6 cursor-pointer bg-green-400 rounded-lg text-white font-semibold">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSixContainer;
