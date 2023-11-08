import { useEffect, useState } from "react";
import AllCard from "../Components/AllFood/AllCard";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
  const itemPerPage = 9;
  const pageNumber = Math.ceil(count.result / itemPerPage);
  const pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i);
  }
  // console.log(pages);
  const prevBtn = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };
  const nextBtn = () => {
    if (currentpage < pageNumber) {
      setCurrentpage(currentpage + 1);
    }
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/v1/allFood?pageNum=${currentpage-1}&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

      fetch('http://localhost:5000/api/v1/foodcount')
      .then(res=>res.json())
      .then(data=>setCount(data))
  }, [currentpage, pageNumber]);
  // console.log(count);

  return (
    <div>
      <h1 className="text-center text-3xl mt-5 font-bold">All Food!</h1>
      <Helmet>
        <title>Royal Food || All Food</title>
      </Helmet>
      <div className="text-center">
        <form>
          <input
            className="p-2 w-[400px] border-2 border-green-700 rounded-lg"
            type="text"
            placeholder="Search"
            name="search"
            id=""
          />{" "}
          <input
            className="p-2 px-4 border-2 border-green-500 hover:border-green-700 cursor-pointer bg-green-500 rounded-lg mt-4 text-white font-semibold"
            type="button"
            value="Search"
          />
        </form>
        <div className="mt-5">
          <button className="p-2 px-4 border-2 border-green-500 hover:border-green-700 cursor-pointer hover:bg-green-500 rounded-lg mt-4 hover:text-white font-semibold mr-5">
            Category
          </button>
          <button className="p-2 px-4 border-2 border-green-500 hover:border-green-700 cursor-pointer hover:bg-green-500 rounded-lg mt-4 hover:text-white font-semibold mr-5">
            Category
          </button>
          <button className="p-2 px-4 border-2 border-green-500 hover:border-green-700 cursor-pointer hover:bg-green-500 rounded-lg mt-4 hover:text-white font-semibold mr-5">
            Category
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-5">
        {data?.map((data) => (
          <AllCard data={data} key={data._id}></AllCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={prevBtn} className="btn mr-3 hover:bg-green-700">
          PREV
        </button>
        {pages?.map((page) => (
          <button
            onClick={() => setCurrentpage(page)}
            key={page}
            className={`${
              currentpage == page && "bg-green-500"
            } hover:bg-green-700 btn mr-3`}
          >
            {page}
          </button>
        ))}
        <button onClick={nextBtn} className="btn hover:bg-green-700">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AllFood;
