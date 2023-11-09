import { Helmet } from "react-helmet-async";
import CartCard from "../Components/Cart/CartCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [update,setupdate] = useState(true);
  const [IsLoading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(
        `https://royal-food-server.vercel.app/api/v1/cart?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((data) => {
        setData(data.data);
        setLoading(false)
        // console.log(data.data);
      });
  }, [user,update]);
  console.log(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(`https://royal-food-server.vercel.app/api/v1/cart/${id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              setupdate(!update);
              Swal.fire("Good job!", "Successfuly Removed!", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Royal Food || Odered Food</title>
      </Helmet>
      {
        IsLoading?<Loading></Loading>:
        <div className="grid grid-cols-1 col-span-4 gap-5">
        {data?.map((data) => (
          <CartCard
            handleDelete={handleDelete}
            data={data}
            key={data._id}
          ></CartCard>
        ))}
      </div>
      }
    </>
  );
};

export default Cart;
