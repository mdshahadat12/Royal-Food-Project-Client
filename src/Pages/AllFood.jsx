import AllCard from "../Components/AllFood/AllCard";

const AllFood = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-5 font-bold">All Food!</h1>
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
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
        <AllCard></AllCard>
      </div>
    </div>
  );
};

export default AllFood;
