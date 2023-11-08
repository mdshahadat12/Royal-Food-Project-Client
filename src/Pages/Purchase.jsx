import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Purchase = () => {
    const {user} = useContext(AuthContext)
    const handlesubmit = () =>{

    }
    return (
        <div className={`p-10rounded-lg my-10`}>
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
              defaultValue={"name"}
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
            />
            <input
              type="number"
              className="p-3 mb-5 rounded-lg w-full"
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