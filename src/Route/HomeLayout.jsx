import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar>
        <div className="w-[90%] mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </Navbar>
    </div>
  );
};

export default HomeLayout;
