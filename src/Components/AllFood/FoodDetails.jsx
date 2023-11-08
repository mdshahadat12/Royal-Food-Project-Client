import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
    const id = useParams().id
    // console.log(id);
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/allfood/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[id])
    const handleAddCart = () =>{

    }
    console.log(data);
    const {_id,img,price,name,description,category} = data;
  return (
    <div>
      <div>
        <div className="md:grid mt-10 md:grid-cols-6">
          <img
            className="w-full border-2 border-green-400 md:col-span-4 md:h-[450px] rounded-lg"
            src={img}
            alt=""
          />
          <div className="md:col-span-2 flex flex-col md:ml-20 justify-center">
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Price: ${price}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
              Product Name: {name}
            </h1>
            <h1 className="font-semibold my-3 bg-green-600 rounded-lg px-2 text-lg">
            Product Type: {category}
            </h1>
            
            <button
              onClick={() => handleAddCart(_id)}
              className="font-semibold my-3 bg-green-600 rounded-lg py-2 text-white cursor-pointer text-lg"
            >
              Add to Cart
            </button>
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
