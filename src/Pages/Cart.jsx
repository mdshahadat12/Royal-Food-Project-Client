import { Helmet } from "react-helmet-async";
import CartCard from "../Components/Cart/CartCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";

const Cart = () => {
  const {user} = useContext(AuthContext) 
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/cart?email=${user?.email}`,{withCredentials:true})
        .then(data=>{
            setData(data.data)
            // console.log(data.data);
        })
  },[user])
  console.log(data);
  const handleDelete = id =>{
    axios.delete(`http://localhost:5000/api/v1/cart/${id}`)
    .then(data=>console.log(data.data))
  }
  return (
    <>
    <Helmet>
        <title>Royal Food || Odered Food</title>
      </Helmet>
    <div className="grid grid-cols-1 col-span-4 gap-5">
      {
        data?.map(data=><CartCard handleDelete={handleDelete} data={data} key={data._id}></CartCard>)
      }
    </div>
    </>
  );
};

export default Cart;
