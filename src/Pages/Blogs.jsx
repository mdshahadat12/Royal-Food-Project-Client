import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Blogs = () => {
    const {name} = useContext(AuthContext)
    console.log(name);
    return (
        <div>
            Questions Answer
        </div>
    );
};

export default Blogs;