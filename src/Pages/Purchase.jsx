import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Purchase = () => {
  const id = useParams().id;
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/allfood/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [id]);
  const { _id, img, name, category, madeBy, price, quantity, description, origin } = data;

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const buyQuantity = form.quantity.value;
    const cartData = {
      _id,
      buyQuantity,
      date,
      img,
      name,
      category,
      madeBy,
      price,
      quantity,
      description,
      origin,
    };
    console.log(cartData);
    fetch('http://localhost:5000/api/v1/cart',{
      method:'POST',
      headers:{},
      body:JSON.stringify(cartData)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  };
  return (
    <div className={`p-10rounded-lg my-10`}>
      <Helmet>
        <title>Royal Food || Order</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl mb-5">Order Form</h1>
      <form onSubmit={handlesubmit}>
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full outv"
              placeholder="Name"
              name="name"
              readOnly
              defaultValue={user?.displayName ? user?.displayName : "Name"}
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="E-mail"
              name="email"
              readOnly
              defaultValue={user?.email}
            />
            <input
              type="date"
              className="p-3 rounded-lg w-full"
              placeholder="Date"
              name="date"
            />
          </div>
          <div>
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Food Name"
              name="foodName"
              readOnly
              defaultValue={name}
            />
            <input
              type="number"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Price"
              name="price"
              readOnly
              defaultValue={price}
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full"
              placeholder="Quantity"
              name="quantity"
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-5">
          <input
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Purchase;
