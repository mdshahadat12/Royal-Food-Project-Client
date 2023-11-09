/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const UpdateAFood = ({ data, setNewData }) => {
  const { user } = useContext(AuthContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.imglink.value;
    const name = form.name.value;
    const category = form.category.value;
    const madeBy = form.email.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const formValue = {
      img,
      name,
      category,
      madeBy,
      price,
      quantity,
      description,
      origin,
    };
    console.log(formValue);
    fetch(`https://royal-food-server.vercel.app/api/v1/addedFood/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setNewData(formValue);
          Swal.fire("Good job!", "Successfuly Updated!", "success");
        }
      });
  };
  const { img, name, category, price, quantity, description, origin } = data;
  return (
    <div className="bg-gray-300 px-4 py-1 rounded-lg">
      <h1 className="text-center font-bold text-3xl mb-5">Update Food</h1>
      <form method="dialog" onSubmit={handlesubmit}>
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Image Link"
              name="imglink"
              defaultValue={img}
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Food Name"
              name="name"
              defaultValue={name}
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full"
              placeholder="Category"
              name="category"
              defaultValue={category}
            />
          </div>
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="You"
              name="email"
              readOnly
              defaultValue={user?.email}
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Price"
              name="price"
              defaultValue={price}
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full"
              placeholder="Quantity"
              name="quantity"
              defaultValue={quantity}
            />
          </div>
        </div>
        <input
          type="text"
          className="p-3 mt-5 rounded-lg w-full"
          placeholder="Food origin"
          name="origin"
          defaultValue={origin}
        />
        <textarea
          name="description"
          className="p-3 rounded-lg w-full mt-5"
          placeholder="Write your Short Description..."
          rows="6"
          defaultValue={description}
        ></textarea>
        <div className="w-full flex justify-center mt-5">
          <button
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
          >
            Add a Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAFood;
