import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
    const {name} = useContext(AuthContext)
    console.log(name);
    return (
        <div>
            <Helmet>
        <title>Royal Food || Blogs</title>
      </Helmet>
            Questions Answer
        </div>
    );
};

export default Blogs;