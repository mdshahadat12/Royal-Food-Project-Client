/* eslint-disable react/prop-types */

import { useState } from "react";
import UpdateAFood from "../Upadate/UpdateAFood";

const AddedFoodCard = ({ data, handleDelete }) => {
  const [newData,setNewData] = useState(data)
  const { _id, img, name, category, madeBy, price } = newData;
  return (
    <div>
      <div className="flex">
        <img className="w-[200px] rounded-l-lg" src={img} alt="" />
        <div className="p-5 flex justify-between flex-grow bg-green-300 rounded-r-lg">
          <div>
            <h1 className="text-lg mt-3 font-semibold">{name}</h1>
            <h3 className="px-2 bg-blue-500  font-medium w-fit rounded-md">
              {category}
            </h3>
            <p className=" font-semibold">Price ${price}</p>
            <p className=" font-semibold">made BY: {madeBy}</p>
          </div>
          <div className="flex flex-col justify-between">
            <button onClick={() => document.getElementById("my_modal_3").showModal()} className="bg-red-500 rounded-md text-white font-semibold px-4 p-2">
              Update
            </button>

            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 rounded-md text-white font-semibold px-4 p-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <UpdateAFood setNewData={setNewData} data={data}></UpdateAFood>
        </div>
      </dialog>
    </div>
  );
};

export default AddedFoodCard;
