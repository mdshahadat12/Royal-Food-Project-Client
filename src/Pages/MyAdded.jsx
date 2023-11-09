import { useContext, useEffect, useState } from "react";
import AddedFoodCard from "../Components/AddedFood/AddedFoodCard";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const MyAdded = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [update,setupdate] = useState(true)
  const [IsLoading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(
        `https://royal-food-server.vercel.app/api/v1/addedFood?email=${user?.email}`,
        { withCredentials: true }
      )
      .then((data) => {
        setData(data.data);
        setLoading(false)
        console.log(data.data);
      });
  }, [user,update]);
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
          .delete(`https://royal-food-server.vercel.app/api/v1/addedFood/${id}`)
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
        <title>Royal Food || My Added</title>
      </Helmet>
      {
        IsLoading?<Loading></Loading>:
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data?.map((data) => (
          <AddedFoodCard
            handleDelete={handleDelete}
            data={data}
            key={data._id}
          ></AddedFoodCard>
        ))}
      </div>
      }
    </>
  );
};

export default MyAdded;
