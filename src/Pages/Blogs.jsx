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
      <div className="w-[90%] mx-auto">
    <h1 className="text-3xl font-extrabold text-center my-10">Royal Blog</h1>
    
    <h1 className="text-xl font-bold my-2">1. Discuss the scope of Var, Let, and Const</h1>

    <p>Scope is where we can access or use a variable. <br/> <br/>
        <b>Var scope</b> <br/>
         # If you declare a block scope variable with var it can be accessed from global but if you declare it in a function it cannot be accessed outside the function so var is called functional scope <br/> <br/>
       
        <b>Let and Const</b> <br/>
        # If you declare a variable in block scope and function scope with let or const, it cannot be accessed outside that block and function, so let and constant are called block scope.</p>

    <h1 className="text-xl font-bold my-2">2. Tell us the use cases of Null, and, Undefined</h1>

    <p>If no value is defined anywhere, it defaults to undefined, which is no value set.  If I am supposed to get something as a value somewhere but I get undefined then no value is set there and if there is no value then I can set it to null that it currently has no value. 
    If there is no value in my mind then it will be null and if there is a value but not set then it will be unfind <br/> <br/>
    Jhankar Bhai was saying that undefined is like giving a blank exam paper and Null is like giving no paper at all.</p>

    <h1 className="text-xl font-bold my-2">3. What do you mean by REST API?</h1>

    <p>REST full meaning is Representational State Transfer <br/>
        REST is API Design Model. This is the most used model for API. This is a way to connect a server.

    </p>

</div>
        </div>
    );
};

export default Blogs;