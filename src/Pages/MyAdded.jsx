import { useContext, useEffect, useState } from "react";
import AddedFoodCard from "../Components/AddedFood/AddedFoodCard";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyAdded = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/addedFood?email=${user?.email}`)
        .then(data=>{
            setData(data.data)
            console.log(data.data);
        })
    },[user])
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/api/v1/addedFood/${id}`)
        .then(data=>console.log(data.data))
    }
    return (
        <>
        <Helmet>
        <title>Royal Food || My Added</title>
      </Helmet>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {
                data?.map(data=><AddedFoodCard handleDelete={handleDelete} data={data} key={data._id}></AddedFoodCard>)
            }
        </div>
        </>
    );
};

export default MyAdded;