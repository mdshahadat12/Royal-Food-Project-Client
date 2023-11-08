

const AddedFoodCard = () => {
    return (
        <div className="flex">
      <img
        className="w-[200px] rounded-l-lg"
        src="https://i.ibb.co/2gbqYTD/health1.png"
        alt=""
      />
      <div className="p-5 flex justify-between flex-grow bg-green-300 rounded-r-lg">
        <div>
          <h1 className="text-lg mt-3 font-semibold">title</h1>
          <h3 className="px-2 bg-blue-500  font-medium w-fit rounded-md">
            category
          </h3>
          <p className=" font-semibold">$price</p>
          <p className=" font-semibold">made BY:</p>
          
        </div>
        <div className="flex flex-col justify-between">
        <button className="bg-red-500 rounded-md text-white font-semibold px-4 p-2">Update</button>
        
        <button className="bg-red-500 rounded-md text-white font-semibold px-4 p-2">Delete</button>
        </div>
      </div>
    </div>
    );
};

export default AddedFoodCard;