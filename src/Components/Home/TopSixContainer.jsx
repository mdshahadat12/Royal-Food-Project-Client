import { Link } from "react-router-dom";
import TopSixCard from "./topSixCard";

const TopSixContainer = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold">Top Selling Food!</h1>
      <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-5">
        <TopSixCard></TopSixCard>
        <TopSixCard></TopSixCard>
        <TopSixCard></TopSixCard>
        <TopSixCard></TopSixCard>
        <TopSixCard></TopSixCard>
        <TopSixCard></TopSixCard>
      </div>
      <div className="flex justify-center">
        <Link to={"allpage"}><button className="text-center p-2 px-6 cursor-pointer bg-green-400 rounded-lg text-white font-semibold">
          See All
        </button></Link>
      </div>
    </div>
  );
};

export default TopSixContainer;
