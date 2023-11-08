import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AllCard from "../AllFood/AllCard";

const TopSixContainer = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/api/v1/foodSix')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold">Top Selling Food!</h1>
      <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-5">
        {data?.map((data) => (
          <AllCard data={data} key={data._id}></AllCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"allfood"}><button className="text-center p-2 px-6 cursor-pointer bg-green-400 rounded-lg text-white font-semibold">
          See All
        </button></Link>
      </div>
    </div>
  );
};

export default TopSixContainer;
