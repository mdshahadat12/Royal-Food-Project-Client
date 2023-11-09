import { Helmet } from "react-helmet-async";
import Message from "../Components/Home/Message";
import Slider from "../Components/Home/Slider";
import TopSixContainer from "../Components/Home/topSixContainer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Royal Food || Home</title>
      </Helmet>
      {/* banner */}
      <div className={`bg-blue-100 rounded-lg my-10 mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:p-9`}>
        <div className="flex flex-col md:w-1/2 items-center text-center justify-center">
          <h3 className={` lg:text-3xl text-2xl font-semibold mb-9`}>
            -SALE FOOD-
          </h3>
          <h1 className={` lg:text-5xl text-3xl font-bold`}>
            Buy Food & get <br />
            <span className="text-green-500">40% off</span>
          </h1>
          <div className="flex gap-4 text-xl font-semibold my-16 items-center">
            <button
              id="copy"
              className="button px-5 py-2 text-white rounded-md bg-orange-500"
              type="button"
            >
              See Details
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="rounded-full" src='https://i.ibb.co/3CKzScw/i-Stock-576711118-0.jpg' alt="" />
        </div>
      </div>
      <TopSixContainer></TopSixContainer>
      <div className="h-[300px] my-10 w-[90vw]">
        <Slider></Slider>
      </div>
      <Message></Message>
    </>
  );
};

export default Home;
