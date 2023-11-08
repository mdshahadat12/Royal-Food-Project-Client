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
      <div className="h-[450px] my-10 rounded-lg bg-green-500"></div>
      <TopSixContainer></TopSixContainer>
      <div className="h-[300px] my-10 w-[90vw]">
        <Slider></Slider>
      </div>
      <Message></Message>
    </>
  );
};

export default Home;
