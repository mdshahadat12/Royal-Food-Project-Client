import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Blogs = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://royal-food-server.vercel.app/api/v1/blog")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  const { firstQ, secondQ, thirdQ, firstA, secondA, thirdA } = data;
  return (
    <div>
      <Helmet>
        <title>Royal Food || Blogs</title>
      </Helmet>
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-extrabold text-center my-10">
          Royal Blog
        </h1>

        <h1 className="text-xl font-bold my-2">1. {firstQ}</h1>

        <p>{firstA}</p>

        <h1 className="text-xl font-bold my-2">2. {secondQ}</h1>

        <p>{secondA}</p>

        <h1 className="text-xl font-bold my-2">3. {thirdQ}</h1>

        <p>{thirdA}</p>
      </div>
    </div>
  );
};

export default Blogs;
