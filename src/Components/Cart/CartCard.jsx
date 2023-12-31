/* eslint-disable react/prop-types */

const CartCard = ({data,handleDelete}) => {
  
  const { _id,img,price,madeBy,category,name} = data;
  return (
    <div className="flex">
      <img
        className="w-[200px] rounded-l-lg"
        src={img}
        alt=""
      />
      <div className="p-5 flex justify-between flex-grow bg-green-300 rounded-r-lg">
        <div>
          <h1 className="text-lg mt-3 font-semibold">{name}</h1>
          <h3 className="px-2 bg-blue-500  font-medium w-fit rounded-md">
            {category}
          </h3>
          <p className=" font-semibold">Price: ${price}</p>
          <p className=" font-semibold">made BY: {madeBy}</p>
          
        </div>
        <div>
        <button onClick={()=>handleDelete(_id)} className="bg-red-500 rounded-md text-white font-semibold px-4 p-2">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
