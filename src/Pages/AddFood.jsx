
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const AddFood = () => {
  const {user} = useContext(AuthContext)
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

    fetch(
      "http://localhost:5000/api/v1/allFood",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Successfuly Added!", "success");
        }
      });
  };
  return (
    <div className={`p-10 bg-gray-300 rounded-lg my-10`}>
      <h1 className="text-center font-bold text-3xl mb-5">Add a Food</h1>
      <form onSubmit={handlesubmit}>
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Image Link"
              name="imglink"
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Food Name"
              name="name"
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full"
              placeholder="Category"
              name="category"
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
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full"
              placeholder="Quantity"
              name="quantity"
            />
          </div>
        </div>
        <input
              type="text"
              className="p-3 mt-5 rounded-lg w-full"
              placeholder="Food origin"
              name="origin"
            />
        <textarea
          name="description"
          className="p-3 rounded-lg w-full mt-5"
          placeholder="Write your Short Description..."
          rows="6"
        ></textarea>
        <div className="w-full flex justify-center mt-5">
          <input
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
            value="Add a Food"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
